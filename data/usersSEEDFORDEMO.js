const bcrypt = require("bcryptjs");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          name: "Jess",
          title: "Office Manager",
          email: "jess@soup.com",
          role_id: 1,
          loc_id: 1,
          username: "jess",
          password: bcrypt.hashSync("test123", 16)
        },
        {
          id: 2,
          name: "Test Employee",
          title: "Volunteer",
          email: "test@soup.com",
          role_id: 2,
          loc_id: 3,
          username: "test",
          password: bcrypt.hashSync("test123", 16)
        },
        {
          id: 3,
          name: "Jack",
          title: "Chef",
          email: "jack@soup.com",
          role_id: 1,
          loc_id: 3,
          username: "jack",
          password: bcrypt.hashSync("test123", 16)
        },
        {
          id: 4,
          name: "Mike",
          title: "Volunteer",
          email: "mike@soup.com",
          role_id: 2,
          loc_id: 1,
          username: "mike",
          password: bcrypt.hashSync("test123", 16)
        }
      ]);
    });
};
