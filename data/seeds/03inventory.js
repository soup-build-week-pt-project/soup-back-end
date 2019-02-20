const inventory_seeds = require("../Seed_Data/inventory_seeds");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("inventory")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("inventory").insert(inventory_seeds);
    });
};
