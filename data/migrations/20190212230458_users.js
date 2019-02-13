exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments();
    tbl.string("name").notNullable();
    tbl.string("position").notNullable();
    tbl
      .integer("role_id")
      .unsigned()
      .notNullable();
    tbl.integer("loc_id").unsigned();
    tbl
      .foreign("role_id")
      .references("id")
      .on("roles");
    tbl
      .foreign("loc_id")
      .references("id")
      .on("locations");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
