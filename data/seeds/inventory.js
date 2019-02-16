exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("inventory")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("inventory").insert([
        {
          id: 1,
          item: "oranges",
          amount: 3,
          unit: "lbs",
          category_id: 1,
          location_id: 1
        },
        {
          id: 2,
          item: "apples",
          amount: 3,
          unit: "lbs",
          category_id: 1,
          location_id: 2
        },
        {
          id: 3,
          item: "bananas",
          amount: 3,
          unit: "lbs",
          category_id: 1,
          location_id: 3
        },
        {
          id: 4,
          item: "rice",
          amount: 3,
          unit: "lbs",
          category_id: 2,
          location_id: 1
        }
      ]);
    });
};
