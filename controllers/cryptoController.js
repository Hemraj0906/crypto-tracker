// controllers/cryptoController.js
const {
  getLatestCryptoData,
    getCryptoStats,

  getPriceDeviation
} = require("../services/cryptoService");

const fetchCryptoData = async (req, res) => {
  try {
    const cryptos = await getLatestCryptoData();
    res.status(200).json(cryptos);
  } catch (error) {
    res.status(500).json({ message: "Error fetching crypto data", error });
  }
};

const getStats = async (req, res) => {
  try {
    const { coin } = req.query;

    if (!coin) {
      return res.status(400).json({ error: "Coin parameter is required" });
    }

      const cryptoStats = await getCryptoStats(coin.toLowerCase());
      console.log("cryptostats",cryptoStats)

    if (!cryptoStats) {
      return res.status(404).json({ error: `No data found for ${coin}` });
    }

      res.status(200).json({
      

      price: cryptoStats.price,
      marketCap: cryptoStats.marketCap,
      "24hChange": cryptoStats.change24h,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while fetching stats" });
  }
};

const getDeviation = async (req, res) => {
  try {
    const { coin } = req.query;

    if (!coin) {
      return res.status(400).json({ error: "Coin parameter is required" });
    }

      const deviation = await getPriceDeviation(coin.toLowerCase());
     // console.log("deviation",deviation)

    // if (deviation === 0) {
    //   return res.status(404).json({ error: `No data found for ${coin}` });
    // }

    res.status(200).json({
      message: "Successfully fetched deviation",
      deviation: deviation.toFixed(2), // Format to 2 decimal places
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching deviation" });
  }
};
module.exports = { fetchCryptoData, getStats, getDeviation };
