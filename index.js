// index.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const cryptoRoutes = require("./routes/cryptoRoutes");

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;
console.log("MONGO_URI:", process.env.MONGO_URI);


// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Middleware
app.use(express.json());

// Routes
app.use("/api", cryptoRoutes);

// Start background job for fetching crypto data
require("./jobs/cryptoJob");

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
