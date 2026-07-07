const express = require("express");

const router = express.Router();

const {
  getDiseases,
  createDisease,
  getDiseaseById,
  updateDisease,
  deleteDisease,
} = require("../controllers/diseaseController");

// GET All Diseases
router.get("/", getDiseases);

// GET Disease By ID
router.get("/:id", getDiseaseById);

// POST New Disease
router.post("/", createDisease);

// UPDATE Disease
router.put("/:id", updateDisease);

// DELETE Disease
router.delete("/:id", deleteDisease);

module.exports = router;