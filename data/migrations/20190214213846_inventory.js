exports.up = function(knex, Promise) {
  return knex.schema.createTable("inventory", tbl => {
    tbl.increments();
    tbl.string("item").notNullable();
    tbl.float("amount").notNullable();
    tbl.string("unit").notNullable();
    tbl.string('bw_img', 255);
    tbl.string('color_img', 255);
    tbl.integer('max_quan').unsigned();
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
