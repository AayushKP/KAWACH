const Complaint = require("../models/Complaint");

const getComplaint = async (req, res, next) => {
  let complaint;
  try {
    complaint = await Complaint.findById(req.params.id);
    if (!complaint) {
      console.log("Complaint not found:", req.params.id); // Debugging log
      return res.status(404).json({ message: "Complaint not found" });
    }
  } catch (err) {
    console.error("Error fetching complaint:", err.message); // Debugging log
    return res.status(500).json({ message: err.message });
  }
  res.complaint = complaint;
  next();
};

module.exports = { getComplaint };
