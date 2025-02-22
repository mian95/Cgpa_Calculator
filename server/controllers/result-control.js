const scraper = require("../utils/scrap");

// ? route for home page
const homeHandler = async (req, res) => {
  let result = null;
  res.status(200).json({ home: "Home" });
};

// ? post route for result
const resultHandler = async (req, res) => {
  try {
    const { regNo } = req.body;
    if (!regNo || regNo.length === 0) {
      return res.status(400).json({ message: "Fields are required" });
    }

    const { studentName, registrationNo, Cgpa, result } = await scraper(regNo.trim());
    res
      .status(200)
      .json({ name: studentName, regNumber: registrationNo, Cgpa ,result});
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { homeHandler, resultHandler };
