exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("categories")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("categories").insert([
        { id: 1, category: "fruits" },
        { id: 2, category: "dry goods" },
        { id: 3, category: "dairy" },
        { id: 4, category: "vegetables" }
      ]);
    });
};
