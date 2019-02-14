const inventory = require("../models/inventory/inventoryModel");
// const bcrypt = require("bcryptjs");
// const { authenticate, generateToken } = require("../auth/authenticate");

module.exports = server => {
  server.get("/location/:id/inventory", getByLoc),
    server.get("/location/:id/inventory/:item", getItemById);
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
        console.log(items);
        let result = items.filter(inv => inv.id == item);
        console.log(result);
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
