exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { name: "Jess", title: "Office Manager", role_id: 1, loc_id: 1 },
        { name: "Test Employee", title: "Volunteer", role_id: 2, loc_id: 3 },
        { name: "Jack", title: "Chef", role_id: 1, loc_id: 3 },
        { name: "Mike", title: "Volunteer", role_id: 2, loc_id: 1 }
      ]);
    });
};
