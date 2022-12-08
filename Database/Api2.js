const axios = require("axios");

async function getFirstFact() {
  const response = await axios.get("https://catfact.ninja/fact");
  return response.data;
}

module.exports = getFirstFact;
