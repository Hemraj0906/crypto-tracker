// services/cryptoService.js
const axios = require("axios");
const Crypto = require("../models/cryptoModel");

const COINS = ["bitcoin", "matic-network", "ethereum"];

const fetchAndStoreCryptoData = async () => {
  try {
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${COINS.join(
        ","
      )}&vs_currencies=usd&include_market_cap=true&include_24hr_change=true`
    );

    // console.log("Fetched data from CoinGecko:", data); // Add this line

    const cryptos = COINS.map((coin) => ({
      coinId: coin,
      name: coin.charAt(0).toUpperCase() + coin.slice(1),
      price: data[coin].usd,
      marketCap: data[coin].usd_market_cap,
      change24h: data[coin].usd_24h_change,
    }));

    for (const cryptoData of cryptos) {
      const crypto = new Crypto(cryptoData);
      await crypto.save();
    }

    console.log("Cryptocurrency data saved successfully.");
  } catch (error) {
    console.error("Error fetching cryptocurrency data:", error);
  }
};

fetchAndStoreCryptoData();

const getLatestCryptoData = async () => {
  try {
    const data = await Crypto.find().sort({ timestamp: -1 }).limit(3);
    return data;
  } catch (error) {
    throw new Error("Error fetching data from the database");
  }
};

const getCryptoStats = async (coinId) => {
  try {
    // Find the latest data for the requested coin by ID
    const cryptoData = await Crypto.findOne({ coinId }).sort({ timestamp: -1 });
    return cryptoData;
  } catch (error) {
    console.error("Error fetching crypto stats:", error);
    throw error;
  }
};

const calculateStandardDeviation = (prices) => {
  const n = prices.length;
  // if (n === 0) return 0;

  const mean = prices.reduce((acc, price) => acc + price, 0) / n;
  console.log("mean------>", mean);

  const variance =
    prices.reduce((acc, price) => acc + Math.pow(price - mean, 2), 0) / n;
  console.log("variance--->", variance);

  const stdDev = Math.sqrt(variance);
  console.log("standard deviation--->", stdDev);

  return stdDev;
};

const getPriceDeviation = async (coinId) => {
  // Fetch the last 3 records for the requested cryptocurrency based on timestamp
  const records = await Crypto.find({ coinId })
    .sort({ timestamp: -1 }) // Sort by most recent
    .limit(3); // Limit to the last 3 records

  // Map prices from the records
  const prices = records.map((record) => record.price);
  // const prices = [40000, 45000, 50000];  for testing approch
  console.log("prices->", prices); // This should now print the correct 3 prices

  // Calculate the standard deviation
  const deviation = calculateStandardDeviation(prices);
  console.log("deviation", deviation);

  return deviation;
};

module.exports = {
  fetchAndStoreCryptoData,
  getLatestCryptoData,
  getCryptoStats,
  getPriceDeviation,
};
