require("dotenv").config();
const { chromium } = require("playwright");

// ----------------------
// Utility functions
// ----------------------
const blockUnnecessaryResources = async (page) => {
  await page.route(
    "**/*.{png,jpg,jpeg,css,woff,woff2,eot,ttf,svg}",
    (route) => route.abort()
  );
};

// GPA Quality Point calculation
const getQualityPoint = (obtainedMarks, creditHours) => {
  if (creditHours <= 0) return 0;
  const totalMarks = creditHours * 20;
  const percentage = (obtainedMarks / totalMarks) * 100;

  let qpPerCreditHour = 0;
  if (percentage < 40) {
    qpPerCreditHour = 0;
  } else if (percentage < 50) {
    qpPerCreditHour = 1.0 + (percentage - 40) * 0.1;
  } else if (percentage < 80) {
    qpPerCreditHour = 2.0 + (percentage - 50) * (2 / 30);
  } else {
    qpPerCreditHour = 4.0;
  }

  const totalQP = qpPerCreditHour * creditHours;
  return Number(totalQP.toFixed(2));
};

// ----------------------
// Main Scraper function
// ----------------------
const scrap = async (regNo) => {
  let browser;
  try {
    browser = await chromium.launch({ headless: true, args: ["--no-sandbox"] });
    const page = await browser.newPage();

    await blockUnnecessaryResources(page);

    // Navigate and login
    const loginUrl = process.env.LOGIN_URL || "https://lms.uaf.edu.pk/login/index.php";
    await page.goto(loginUrl, { waitUntil: "domcontentloaded" });
    await page.fill("#REG", regNo);
    await page.click("input[type='submit'][value='Result']");
    await page.waitForSelector(".table.tab-content", { timeout: 20000 });

    // Extract student info
    const rawInfo = await page.textContent(".table.tab-content");
    const cleanedInfo = rawInfo
      .replace("Registration #", "")
      .replace("Student Full Name", "")
      .trim();

    const match = cleanedInfo.match(/(\d{4}-?[A-Za-z]{2,}-?\d+)\s+(.+)/);
    const studentInfo = {
      registrationNo: match ? match[1] : "Unknown",
      studentName: match ? match[2] : "Unknown",
    };

    // Extract and process courses inside the browser context
    const { allCourses } = await page.$$eval(".table.tab-content tr", (rows) => {
      const courses = {};

      rows.slice(1).forEach((row) => {
        const columns = row.querySelectorAll("td");
        if (columns.length > 11) {
          const semesterName = columns[1]?.innerText.trim();
          const courseCode = columns[3]?.innerText.trim();
          const creditHours = parseInt(columns[5]?.innerText.trim()) || 0;
          const obtainedMarks = parseInt(columns[10]?.innerText.trim()) || 0;
          const grade = columns[11]?.innerText.trim();

          // Skip pass/fail courses
          if (grade === "P") return;

          // Store latest/highest marks attempt per course
          if (
            !courses[courseCode] ||
            obtainedMarks > courses[courseCode].obtainedMarks
          ) {
            courses[courseCode] = {
              semester: semesterName,
              courseCode,
              creditHours,
              obtainedMarks,
              grade,
            };
          }
        }
      });

      return { allCourses: courses };
    });

    // Attach quality points (done in Node context so we can reuse getQualityPoint)
    for (const code in allCourses) {
      allCourses[code].qualityPoints = getQualityPoint(
        allCourses[code].obtainedMarks,
        allCourses[code].creditHours
      );
    }

    // Organize by semesters
    const semesterMap = {};
    Object.values(allCourses).forEach((course) => {
      const { semester } = course;
      if (!semesterMap[semester]) semesterMap[semester] = [];
      semesterMap[semester].push(course);
    });

    // Calculate GPA per semester
    const formattedResult = Object.entries(semesterMap).map(
      ([semester, subjects]) => {
        const totalQP = subjects.reduce((sum, s) => sum + s.qualityPoints, 0);
        const totalCH = subjects.reduce((sum, s) => sum + s.creditHours, 0);

        const gpa = totalCH > 0 ? Number((totalQP / totalCH).toFixed(3)) : 0;

        return {
          semester,
          Gpa: gpa,
          subjects: subjects.map(
            ({ courseCode, creditHours, obtainedMarks, grade, qualityPoints }) => ({
              courseCode,
              creditHours,
              obtainedMarks,
              grade,
              qualityPoints,
            })
          ),
        };
      }
    );

    // Calculate CGPA
    const cumulativeQP = Object.values(allCourses).reduce(
      (sum, c) => sum + c.qualityPoints,
      0
    );
    const cumulativeCH = Object.values(allCourses).reduce(
      (sum, c) => sum + c.creditHours,
      0
    );
    const cgpa =
      cumulativeCH > 0 ? Number((cumulativeQP / cumulativeCH).toFixed(5)) : 0;

    return { ...studentInfo, Cgpa: cgpa, result };
    // console.log(...studentInfo, Cgpa: cgpa, result)
  } catch (error) {
    console.error("Scraping error:", error.message);
    return { error: error.message };
  } finally {
    if (browser) await browser.close();
  }
};

// module.exports = scrap;
scrap("2022-ag-7777")