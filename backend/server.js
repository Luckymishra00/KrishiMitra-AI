require("dotenv").config();

const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const diseaseRoutes = require("./routes/diseaseRoutes");

connectDB();

const app = express();

// ------------------------------------
// Middleware
// ------------------------------------
app.use(cors());
app.use(express.json());

// ------------------------------------
// Login Rate Limiter
// ------------------------------------
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  message: {
    success: false,
    message: "Too many login attempts. Please try again after 15 minutes.",
  },
});

// ------------------------------------
// Routes
// ------------------------------------
app.use("/api/diseases", diseaseRoutes);

// Apply rate limiter only to login requests
app.use("/api/auth/login", loginLimiter);

app.use("/api/auth", authRoutes);

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

// ------------------------------------
// Start Server
// ------------------------------------
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});