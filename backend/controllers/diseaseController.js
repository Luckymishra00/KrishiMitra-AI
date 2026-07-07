const Disease = require("../models/Disease");

// ------------------------------------
// GET All Diseases
// ------------------------------------
const getDiseases = async (req, res) => {
  try {
    const diseases = await Disease.find();

    res.status(200).json({
      success: true,
      data: diseases,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ------------------------------------
// CREATE Disease
// ------------------------------------
const createDisease = async (req, res) => {
  try {
    const { name, crop, treatment } = req.body;

    if (!name || !crop || !treatment) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const disease = await Disease.create({
      name,
      crop,
      treatment,
    });

    res.status(201).json({
      success: true,
      message: "Disease added successfully",
      data: disease,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ------------------------------------
// GET Disease By ID
// ------------------------------------
const getDiseaseById = async (req, res) => {
  try {
    const disease = await Disease.findById(req.params.id);

    if (!disease) {
      return res.status(404).json({
        success: false,
        message: "Disease not found",
      });
    }

    res.status(200).json({
      success: true,
      data: disease,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ------------------------------------
// UPDATE Disease
// ------------------------------------
const updateDisease = async (req, res) => {
  try {
    const disease = await Disease.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!disease) {
      return res.status(404).json({
        success: false,
        message: "Disease not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Disease updated successfully",
      data: disease,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ------------------------------------
// DELETE Disease
// ------------------------------------
const deleteDisease = async (req, res) => {
  try {
    const disease = await Disease.findByIdAndDelete(req.params.id);

    if (!disease) {
      return res.status(404).json({
        success: false,
        message: "Disease not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Disease deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getDiseases,
  createDisease,
  getDiseaseById,
  updateDisease,
  deleteDisease,
};