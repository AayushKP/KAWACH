const express = require("express");
const router = express.Router();
const Complaint = require("../models/Complaint");
const { getComplaint } = require("../middleware/getComplaintMiddleware");

// Get all complaints
router.get("/", async (req, res) => {
  try {
    const complaints = await Complaint.find();
    res.json(complaints);
  } catch (err) {
    console.error("Error fetching complaints:", err.message); // Debugging log
    res.status(500).json({ message: err.message });
  }
});

// Create a new complaint
//using app.use("/complaints")
router.post("/", async (req, res) => {
  const { heading, description, image, location } = req.body;

  const newComplaint = new Complaint({
    heading,
    description,
    image,
    location,
    likes: 0, // default value
    dislikes: 0, // default value
  });

  try {
    const savedComplaint = await newComplaint.save();
    console.log("Complaint created:", savedComplaint); // Debugging log
    res.status(201).json(savedComplaint);
  } catch (err) {
    console.error("Error creating complaint:", err.message); // Debugging log
    res.status(400).json({ message: err.message });
  }
});


module.exports = router;
