exports.up = knex => knex.schema.createTable('favMeals', table => {
  table.increments("id");
  table.integer("userId").references("id").inTable("users").onDelete("CASCADE");
  table.integer("mealId").references("id").inTable("meals");
});

exports.down = knex => knex.schema.dropTable('favMeals');
