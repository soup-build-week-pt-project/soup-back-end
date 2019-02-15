exports.up = function(knex, Promise) {
  return knex.schema.createTable("roles", tbl => {
    tbl.increments();
    tbl
      .string("role")
      .unique()
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("roles");
};
