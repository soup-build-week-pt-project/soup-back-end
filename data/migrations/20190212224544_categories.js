exports.up = function(knex, Promise) {
  return knex.schema.createTable("categories", tbl => {
    tbl.increments();
    tbl.string("category").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("categories");
};
