const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  getDiseases,
  createDisease,
  getDiseaseById,
  updateDisease,
  deleteDisease,
} = require("../controllers/diseaseController");

// GET All Diseases (Protected)
router.get("/", protect, getDiseases);

// GET Disease By ID (Protected)
router.get("/:id", protect, getDiseaseById);

// POST New Disease (Protected)
router.post("/", protect, createDisease);

// UPDATE Disease (Protected)
router.put("/:id", protect, updateDisease);

// DELETE Disease (Protected)
router.delete("/:id", protect, deleteDisease);

module.exports = router;