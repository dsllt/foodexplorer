exports.up = knex => knex.schema.createTable('orderMeal', table => {
  table.increments("id");
  table.integer("orderId").references("id").inTable("orders").onDelete("CASCADE");
  table.integer("mealId").references("id").inTable("meals")
});

exports.down = knex => knex.schema.dropTable('orderMeal');
