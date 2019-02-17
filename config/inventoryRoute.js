const db = require("../data/dbConfig.js");
const inventory = require("../models/inventoryModel");
const { requireAdmin } = require("../auth/authenticate");

module.exports = server => {
  server.get("/inventory/:id", requireAdmin, getByLoc),
    server.get("/inventory/:id/:item", requireAdmin, getItemById),
    server.post("/inventory/:id", requireAdmin, newItem),
    server.put("/inventory/:item", requireAdmin, updateItem),
    server.delete("/inventory/:item", requireAdmin, deleteItem);
};

//ALL INVENTORY ENDPOINTS REQUIRE A TOKEN.

//requires a location id. "all" in place of id will return all locations. returns an array of objects.
function getByLoc(req, res) {
  const { id } = req.params;
  inventory
    .getInventoryByLocation(id)
    .then(async items => {
      if (items.length) {
        console.log(items);
        items = await inventory.getCats(items);
        console.log(items);
        res.status(200).json(items);
      } else {
        res.status(404).json({ message: "No items for that location." });
      }
    })
    .catch(err => {
      res.status(400).send(err);
    });
}

//requires an item id, returns a single object
function getItemById(req, res) {
  const id = req.params.id;
  const item = req.params.item;
  inventory
    .getInventoryByLocation(id)
    .then(items => {
      if (items.length) {
        let result = items.filter(inv => inv.id == item);
        if (result.length) {
          db("categories")
            .where("id", result[0].category_id)
            .then(cat => {
              result[0].category_id = cat[0].category;
              res.status(200).json(result);
            });
          // res.status(200).json(result);
        } else {
          res.status(404).json({ message: "Item ID not found" });
        }
      } else {
        res.status(404).json({ message: "Location ID not found" });
      }
    })
    .catch(err => {
      res.status(400).send(err);
    });
}

//requires an object representing item to be created, returns an array of objects where id == newitem.id
function newItem(req, res) {
  const { id } = req.params;
  const item = req.body;
  if (item.location_id == id) {
    inventory
      .newItem(item)
      .then(response => {
        if (response) {
          res.status(201).json(response);
        } else {
          res.status(400).json({ message: "failed to create new item" });
        }
      })
      .catch(err => {
        res.status(400).send(err);
      });
  } else {
    res.status(401).json({
      message: "Please log into the correct kitchen to post this item."
    });
  }
}

//requires an item id and an updated item. returns updated item as a single object.
function updateItem(req, res) {
  const { item } = req.params;
  const updated = req.body;
  inventory
    .updateInventory(item, updated)
    .then(item => {
      if (item.length) {
        res.status(202).json(item[0]);
      } else {
        res.status(400).json({ message: "record not updated" });
      }
    })
    .catch(err => {
      res.status(400).send(err);
    });
}

//requires an item id, returns the number of records deleted.
function deleteItem(req, res) {
  const { item } = req.params;
  inventory
    .remove(item)
    .then(response => {
      if (response > 0) {
        res.status(200).json(response);
      } else {
        res.status(404).json({ message: `Record not found` });
      }
    })
    .catch(err => {
      res.status(400).send(err);
    });
}
