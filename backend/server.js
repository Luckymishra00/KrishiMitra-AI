require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

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
// Disease Data
// ------------------------------------
let diseases = [
  {
    id: 1,
    name: "Leaf Blight",
    crop: "Rice",
    treatment: "Apply recommended fungicide",
  },
  {
    id: 2,
    name: "Powdery Mildew",
    crop: "Wheat",
    treatment: "Use sulfur-based spray",
  },
  {
    id: 3,
    name: "Bacterial Spot",
    crop: "Tomato",
    treatment: "Copper-based pesticide",
  },
];

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
// GET All Diseases
// ------------------------------------
app.get("/api/diseases", (req, res) => {
  res.status(200).json({
    success: true,
    data: diseases,
  });
});

// ------------------------------------
// SEARCH Diseases
// ------------------------------------
app.get("/api/diseases/search", (req, res) => {
  const query = req.query.q;

  if (!query) {
    return res.status(400).json({
      success: false,
      message: "Search query is required",
    });
  }

  const results = diseases.filter((disease) =>
    disease.name.toLowerCase().includes(query.toLowerCase())
  );

  res.status(200).json({
    success: true,
    totalResults: results.length,
    data: results,
  });
});

// ------------------------------------
// GET Disease By ID
// ------------------------------------
app.get("/api/diseases/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const disease = diseases.find((d) => d.id === id);

  if (!disease) {
    return res.status(404).json({
      success: false,
      message: "Disease not found",
    });
  }

  res.json({
    success: true,
    data: disease,
  });
});

// ------------------------------------
// POST Disease
// ------------------------------------
app.post("/api/diseases", (req, res) => {
  const { name, crop, treatment } = req.body;

  if (!name || !crop || !treatment) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  const newDisease = {
    id: diseases.length + 1,
    name,
    crop,
    treatment,
  };

  diseases.push(newDisease);

  res.status(201).json({
    success: true,
    message: "Disease added successfully",
    data: newDisease,
  });
});

// ------------------------------------
// PUT Disease
// ------------------------------------
app.put("/api/diseases/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const disease = diseases.find((d) => d.id === id);

  if (!disease) {
    return res.status(404).json({
      success: false,
      message: "Disease not found",
    });
  }

  disease.name = req.body.name || disease.name;
  disease.crop = req.body.crop || disease.crop;
  disease.treatment = req.body.treatment || disease.treatment;

  res.json({
    success: true,
    message: "Disease updated successfully",
    data: disease,
  });
});

// ------------------------------------
// DELETE Disease
// ------------------------------------
app.delete("/api/diseases/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = diseases.findIndex((d) => d.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "Disease not found",
    });
  }

  diseases.splice(index, 1);

  res.json({
    success: true,
    message: "Disease deleted successfully",
  });
});

// ------------------------------------
// Start Server
// ------------------------------------

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