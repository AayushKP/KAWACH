const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const exifReader = require("exifreader");
const Complaint = require("../models/Complaint");

const router = express.Router();

// Configure storage for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Get all complaints
router.get("/", async (req, res) => {
  try {
    const complaints = await Complaint.find(); // Fetch all complaints from the database
    res.json(complaints); // Send the complaints as a JSON response
  } catch (err) {
    console.error("Error fetching complaints:", err.message);
    res.status(500).json({ message: err.message });
  }
});

// Create a new complaint with file upload
router.post("/", upload.single("image"), async (req, res) => {
  const { heading, description, location } = req.body;
  const image = req.file ? req.file.filename : null;
  let imageMetadata = {};

  if (image) {
    const imagePath = path.join(__dirname, "..", "uploads", image);
    try {
      const fileBuffer = fs.readFileSync(imagePath);
      const tags = exifReader.load(fileBuffer);

      imageMetadata = {
        captureTime: tags["DateTimeOriginal"]
          ? new Date(tags["DateTimeOriginal"].description).toISOString()
          : null,
        gps: {
          latitude: tags["GPSLatitude"]
            ? parseFloat(tags["GPSLatitude"].description)
            : null,
          longitude: tags["GPSLongitude"]
            ? parseFloat(tags["GPSLongitude"].description)
            : null,
        },
      };
    } catch (err) {
      console.error("Error extracting metadata:", err.message);
    }
  }

  const newComplaint = new Complaint({
    heading,
    description,
    image,
    location,
    imageMetadata,
  });

  try {
    const savedComplaint = await newComplaint.save();
    res.status(201).json(savedComplaint);
  } catch (err) {
    console.error("Error creating complaint:", err.message);
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
