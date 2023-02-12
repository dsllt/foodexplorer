exports.up = knex => knex.schema.createTable('ingredients', table => {
  table.increments("id");
  table.text("name");
  table.integer("mealId").references("id").inTable("meals").onDelete("CASCADE");
});

exports.down = knex => knex.schema.dropTable('ingredients');
