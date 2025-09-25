require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;
const router = require("./routes/result-route.js");

// ✅ Fixed CORS options
const corsOptions = {
  origin: "http://localhost:5173", // Removed trailing slash
  methods: "GET,POST,PUT,PATCH,HEAD",
  credentials: true, // Fixed typo (was "Credential")
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/Cgpa", router);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
