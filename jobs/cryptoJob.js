
const cron = require("node-cron");
const { fetchAndStoreCryptoData } = require("../services/cryptoService");

// Schedule job to fetch crypto data every 2 hours
cron.schedule("0 */2 * * *", () => {
  console.log("Fetching cryptocurrency data...");
  fetchAndStoreCryptoData();
});


// testing scedule for every 15 second data is loaded 

// const cron = require("node-cron");
// const { fetchAndStoreCryptoData } = require("../services/cryptoService");

// // Schedule job to fetch crypto data every 5 seconds
// cron.schedule("*/15 * * * * *", () => {
//   console.log("Fetching cryptocurrency data...");
//   fetchAndStoreCryptoData();
// });
