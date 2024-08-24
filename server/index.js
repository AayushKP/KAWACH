const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const complaintsRouter = require("./routes/complaint");
const authRouter = require("./routes/auth"); // Import auth routes
require("dotenv").config(); // Load environment variables from .env file

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // Allow client origin
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

// Use the complaints router for handling complaints-related requests
app.use("/complaints", complaintsRouter);
app.use("/auth", authRouter); // Use the auth router

// Start the server
const PORT = process.env.PORT || 3000; // Default to 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
