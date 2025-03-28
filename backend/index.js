const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");

// dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
// app.use(cors());

// Test Route
app.get("/", (req, res) => {
  res.send("Backend is running successfully!");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
