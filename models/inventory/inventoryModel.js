const db = require("../../data/dbConfig.js");

module.exports = { getInventoryByLocation, remove };

async function getInventoryByLocation(id) {
  if (id == "all") {
    return db("inventory");
  } else {
    return db("inventory").where("location_id", id);
  }
}

async function updateInventory(id, changes) {}

async function remove(id) {
  return db("inventory")
    .where("id", id)
    .del();
}

async function getItemById(id) {}
