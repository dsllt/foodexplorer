exports.up = knex => knex.schema.createTable('mealIngredient', table => {
  table.increments("id");
  table.integer("ingredientId").references("id").inTable("ingredients")
  table.integer("mealId").references("id").inTable("meals").onDelete("CASCADE");
});

exports.down = knex => knex.schema.dropTable('mealIngredient');
