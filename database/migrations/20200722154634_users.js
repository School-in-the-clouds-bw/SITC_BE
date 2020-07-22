exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments(); // 'id', primary key, auto incrementing
    table
      .string('username', 255)
      .notNullable()
      .unique()
    table.string('password', 255).notNullable()
    table.string('user_type').notNullable()
  })  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
