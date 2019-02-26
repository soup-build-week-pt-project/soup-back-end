const db = require("../data/dbConfig.js");

module.exports = {
  getInventoryByLocation,
  remove,
  updateInventory,
  getItemById,
  newItem,
  getCats
};

async function getInventoryByLocation(id) {
  if (id == "all") {
    return db("inventory");
  } else {
    return db("inventory").where("location_id", id);
  }
}

async function updateInventory(id, changes) {
  await db("inventory")
    .where("id", id)
    .update(changes);
  return db("inventory").where("id", id);
}

async function remove(id) {
  return db("inventory")
    .where("id", id)
    .del();
}

async function getItemById(id) {
  return db("inventory").where("id", id);
}

async function newItem(item) {
  const ids = await db("inventory").insert(item);
  return db("inventory").where("id", ids[0]);
}

async function getCats(items) {
  const cats = [
    "Fruit",
    "Dry Goods",
    "Dairy",
    "Vegetables",
    "Canned Goods",
    "Meat",
    "Seafood",
    "Staples",
    "Baked Goods",
    "Frozen",
    "Other"
  ];
  let withCats = items.map(item => {
    item.category_id = cats[item.category_id - 1];
    return item;
  });
  return withCats;
}
