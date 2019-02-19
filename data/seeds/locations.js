exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("locations")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("locations").insert([
        {
          name: "Test Kitchen 1",
          openings: 5,
          address: "123 Lambda Way",
          city: "San Francisco",
          state: "CA",
          zip: 12000
        },
        {
          name: "Test Kitchen 2",
          openings: 3,
          address: "456 Test St.",
          address2: "Suite 2",
          city: "Boston",
          state: "MA",
          zip: 30011
        },
        {
          name: "Test Kitchen 3",
          openings: 5,
          address: "910 Test Dr.",
          address2: "Building 3",
          city: "New York",
          state: "NY",
          zip: 50011
        },
        {
          name: "Test Kitchen 4",
          openings: 10,
          address: "4 Database Row",
          city: "Manchester",
          state: "NH",
          zip: 20011
        }
      ]);
    });
};
