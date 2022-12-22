exports.up = knex => knex.schema.createTable('orders', table => {
  table.increments("id");
  table.integer("userId").references("id").inTable("users");
  table.text("status");
  table.float("price");
  table.timestamp("created_at").default(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable('orders');
