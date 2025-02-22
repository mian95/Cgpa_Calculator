require("dotenv").config();
const { webkit } = require("playwright");

// Function to block unnecessary resources
const blockUnnecessaryResources = async (page) => {
  await page.route("**/*.{png,jpg,jpeg,css,woff,woff2,eot,ttf,svg}", (route) => route.abort());
};

// Function to navigate to the login page and fill in the registration number
const navigateAndSubmitForm = async (page, regNo) => {
  await page.goto(`${process.env.LOGIN_URL}`, { waitUntil: "domcontentloaded" });
  await page.fill("#REG", regNo);
  await page.click("input[type='submit'][value='Result']");
  await page.waitForSelector(".table.tab-content", { timeout: 10000 });
};

// Function to extract and clean student information
const extractStudentInfo = async (page) => {
  const rawInfo = await page.textContent(".table.tab-content");
  const cleanedInfo = rawInfo
    .replace("Registration #", "")
    .replace("Student Full Name", "")
    .trim();
  const match = cleanedInfo.match(/(\d{4}-?[A-Za-z]{2,}-?\d+)\s+(.+)/);
  return {
    registrationNo: match[1],
    studentName: match[2],
  };
};



// Function to extract and process course data
const extractCourseData = async (page) => {
  return await page.$$eval(".table.tab-content tr", (rows) => {
    const allCourses = {};


// Function to calculate quality points
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



    rows.slice(1).forEach((row) => {
      const columns = row.querySelectorAll("td");
      if (columns.length > 11) {
        const semesterName = columns[1]?.innerText.trim();
        const courseCode = columns[3]?.innerText.trim();
        const creditHours = parseInt(columns[5]?.innerText.trim()) || 0;
        const obtainedMarks = parseInt(columns[10]?.innerText.trim()) || 0;
        const grade = columns[11]?.innerText.trim();
        const qualityPoints = getQualityPoint(obtainedMarks, creditHours);

        if (grade === "P") return;

        if (!allCourses[courseCode] || obtainedMarks > allCourses[courseCode].obtainedMarks) {
          allCourses[courseCode] = {
            semester: semesterName,
            courseCode,
            creditHours,
            obtainedMarks,
            grade,
            qualityPoints,
          };
        }
      }
    });

    return allCourses;
  });
};

// Function to organize courses into semesters and calculate GPA
const organizeCoursesAndCalculateGPA = (allCourses) => {
  const semesterMap = {};
  Object.values(allCourses).forEach((course) => {
    const { semester } = course;
    if (!semesterMap[semester]) {
      semesterMap[semester] = [];
    }
    semesterMap[semester].push(course);
  });

  const formattedResult = Object.entries(semesterMap).map(([semester, subjects]) => {
    const totalQualityPointsInSemester = subjects.reduce((sum, subject) => sum + subject.qualityPoints, 0);
    const totalCreditHoursInSemester = subjects.reduce((sum, subject) => sum + subject.creditHours, 0);
    const gpa =
      totalCreditHoursInSemester > 0
        ? Number((totalQualityPointsInSemester / totalCreditHoursInSemester).toFixed(3))
        : 0;

    return {
      semester: semester,
      Gpa: gpa,
      subjects: subjects.map(({ courseCode, creditHours, obtainedMarks, grade, qualityPoints }) => ({
        courseCode,
        creditHours,
        obtainedMarks,
        grade,
        qualityPoints,
      })),
    };
  });

  return formattedResult;
};

// Function to calculate CGPA
const calculateCGPA = (allCourses) => {
  const cumulativeQualityPoints = Object.values(allCourses).reduce((sum, course) => sum + course.qualityPoints, 0);
  const cumulativeCreditHours = Object.values(allCourses).reduce((sum, course) => sum + course.creditHours, 0);
  return cumulativeCreditHours > 0
    ? Number((cumulativeQualityPoints / cumulativeCreditHours).toFixed(5))
    : 0;
};

// Main scraper function
const scraper = async (regNo) => {
  let browser;
  try {
    browser = await webkit.launch({ headless: true, args: ["--no-sandbox"] });
    const page = await browser.newPage();

    await blockUnnecessaryResources(page);
    await navigateAndSubmitForm(page, regNo);

    const studentInfo = await extractStudentInfo(page);
    const allCourses = await extractCourseData(page);
    const formattedResult = organizeCoursesAndCalculateGPA(allCourses);
    const cgpa = calculateCGPA(allCourses);

    return { ...studentInfo, Cgpa: cgpa, result: formattedResult };
  } catch (error) {
    console.error("Scraping error:", error.message);
  } finally {
    if (browser) await browser.close();
  }
}

module.exports = scraper;