exports.up = function(knex, Promise) {
  return knex.schema.createTable("inventory", tbl => {
    tbl.increments();
    tbl
      .string("item")
      .notNullable()
      .unique();
    tbl.float("amount").notNullable();
    tbl.string("unit").notNullable();
    tbl
      .integer("category_id")
      .unsigned()
      .notNullable();
    tbl
      .foreign("category_id")
      .references("id")
      .on("categories");
    tbl
      .integer("location_id")
      .unsigned()
      .notNullable();
    tbl
      .foreign("location_id")
      .references("id")
      .on("locations");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("inventory");
};
