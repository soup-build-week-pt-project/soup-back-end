const db = require("../../data/dbConfig.js");

module.exports = {
  getLocations
};

async function getLocations() {
  return db("locations");
}
