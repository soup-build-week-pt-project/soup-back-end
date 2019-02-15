exports.up = function(knex, Promise) {
  return knex.schema.createTable("locations", tbl => {
    tbl.increments();
    tbl
      .string("name")
      .notNullable()
      .unique();
    tbl
      .integer("openings")
      .unsigned()
      .notNullable();
    tbl.string("address").notNullable();
    tbl.string("address2");
    tbl.string("city").notNullable();
    tbl.string("state", 2).notNullable();
    tbl
      .integer("zip")
      .unsigned()
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("locations");
};
