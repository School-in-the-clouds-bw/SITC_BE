
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          name: 'Cobra Garner',
          username: 'Cobrettie',
          email: 'cobra@123.com',
          password: '1234',
          role: 'admin',
          country: 'usa'
        },
        {
          id: 2,
          name: 'LynN G',
          username: 'Lynny',
          email: 'lynn@gmail.com',
          password: '123456789',
          role: 'student',
          available: '11pm to 7am'
        }
      ]);
    });
};
