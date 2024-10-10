// routes/cryptoRoutes.js
const express = require("express");
const {
  fetchCryptoData,
    getStats,
  getDeviation
} = require("../controllers/cryptoController");
const router = express.Router();

// Define route for fetching the latest crypto data
router.get("/cryptos", fetchCryptoData);
router.get("/stats", getStats);
router.get("/deviation", getDeviation);

module.exports = router;
