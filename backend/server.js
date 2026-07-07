require("dotenv").config();

const diseaseRoutes = require("./routes/diseaseRoutes");

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

connectDB();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/diseases", diseaseRoutes);

// ------------------------------------
// Dashboard Data
// ------------------------------------
const dashboardData = {
  totalFarmers: 120,
  diseasesDetected: 35,
  weatherAlerts: 5,
};

// ------------------------------------
// Weather Data
// ------------------------------------
const weatherData = {
  location: "Dehradun",
  temperature: "28°C",
  humidity: "65%",
  windSpeed: "12 km/h",
  condition: "Sunny",
};
// ------------------------------------
// Home Route
// ------------------------------------
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to KrishiMitra AI Backend 🌱",
    status: "Server Running Successfully",
  });
});

// ------------------------------------
// Dashboard API
// ------------------------------------
app.get("/api/dashboard", (req, res) => {
  res.status(200).json({
    success: true,
    data: dashboardData,
  });
});

// ------------------------------------
// Weather API
// ------------------------------------
app.get("/api/weather", (req, res) => {
  res.status(200).json({
    success: true,
    data: weatherData,
  });
});




// ------------------------------------
// 404 Route Handler
// ------------------------------------
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API Route Not Found",
  });
});

// ------------------------------------
// Global Error Handler
// ------------------------------------
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});