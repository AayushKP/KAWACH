const mongoose = require("mongoose");

const ComplaintSchema = new mongoose.Schema(
  {
    heading: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    location: {
      type: String,
      required: true,
    },
    imageMetadata: {
      captureTime: {
        type: Date,
        required: false,
        default: null,
      },
      gps: {
        latitude: { type: Number, required: false },
        longitude: { type: Number, required: false },
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Complaint", ComplaintSchema);
