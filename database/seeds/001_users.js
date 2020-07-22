
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          username: 'Cobrettie',
          password: '1234',
          user_type: 'admin'
        },
        {
          id: 2,
          username: 'Lynny',
          password: '123456789',
          user_type: 'student'
        }
      ]);
    });
};
