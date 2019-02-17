exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("categories")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("categories").insert([
        { id: 1, category: "Fruit" },
        { id: 2, category: "Dry Goods" },
        { id: 3, category: "Dairy" },
        { id: 4, category: "Vegetables" },
        { id: 5, category: "Canned Goods" },
        { id: 6, category: "Meat" },
        { id: 7, category: "Seafood" },
        { id: 8, category: "Staples" },
        { id: 9, category: "Baked Goods" },
        { id: 10, category: "Frozen" },
        { id: 11, category: "Other" }
      ]);
    });
};
