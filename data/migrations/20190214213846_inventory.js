exports.up = function(knex, Promise) {
  return knex.schema.createTable("inventory", tbl => {
    tbl.increments();
    tbl.string("item").notNullable();
    tbl.float("amount").notNullable();
    tbl.string("unit").notNullable();
    tbl.string("bw_img", 255);
    tbl.string("color_img", 255);
    tbl
      .integer("min_quan")
      .defaultTo(30)
      .unsigned();
    // tbl
    //   .integer("category_id")
    //   .unsigned()
    //   .notNullable();
    tbl
      .integer("category_id")
      .unsigned()
      .references("id")
      .inTable("categories");
    // tbl
    //   .integer("location_id")
    //   .unsigned()
    //   .notNullable();
    tbl
      .integer("location_id")
      .unsigned()
      .references("id")
      .inTable("locations");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("inventory");
};
