const inventory = require("../../models/inventory/inventoryModel");
const { authenticate, requireAdmin } = require("../../auth/authenticate");

module.exports = server => {
  server.get("/inventory/:id", authenticate, requireAdmin, getByLoc),
    server.get("/inventory/:id/:item", authenticate, requireAdmin, getItemById),
    server.post("/inventory/:id", authenticate, requireAdmin, newItem),
    server.put("/inventory/:item", authenticate, requireAdmin, updateItem),
    server.delete("/inventory/:item", authenticate, requireAdmin, deleteItem);
};

function getByLoc(req, res) {
  const { id } = req.params;
  inventory
    .getInventoryByLocation(id)
    .then(items => {
      if (items.length) {
        res.status(200).json(items);
      } else {
        res.status(404).json({ message: "No items for that location." });
      }
    })
    .catch(err => {
      res.status(400).send(err);
    });
}

function getItemById(req, res) {
  const id = req.params.id;
  const item = req.params.item;
  inventory
    .getInventoryByLocation(id)
    .then(items => {
      if (items.length) {
        let result = items.filter(inv => inv.id == item);
        if (result.length) {
          res.status(200).json(result);
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
