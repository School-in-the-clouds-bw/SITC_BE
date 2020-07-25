exports.up = function(knex) {
  return knex.schema
    .createTable('users', table => {
      table.increments() // 'id', primary key, auto incrementing
      table.string('name', 255).notNullable()
      table
        .string('username', 255)
        .notNullable()
        .unique()
      table.string('email').notNullable().unique()
      table.string('password', 255).notNullable()
      table.string('role', 255).notNullable()
      table.string('country', 255)
      table.string('available', 255)
    })

    .createTable('tasks', table => {
      table.increments()
      table.string('description').notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('tasks')
};
