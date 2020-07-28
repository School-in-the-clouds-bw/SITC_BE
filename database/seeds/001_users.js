
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users')
      .insert([
        {
          name: 'Jimmothiaus Zaydo',
          username: 'jz4',
          email: 'zaydo@gmail.com',
          password: 'zman',
          role: 'administrator',
          country: 'usa'
        },
        {
          name: 'Stacie Moore',
          username: 'stacie',
          email: 'staciem@gmail.com',
          password: 'pw4598',
          role: 'volunteer',
          country: 'brazil'
        },
        {
          name: 'Elizabeth Lynce',
          username: 'bballergurl',
          email: 'basketballislife@yahoo.com',
          password: 'toofast4u',
          role: 'student',
          country: 'usa'
        },
        {
          name: 'John Row',
          username: 'jrow18',
          email: 'jrow@gmail.com',
          password: 'pw123',
          role: 'volunteer',
          country: 'usa'
        },
        {
          name: 'Abigail Smith',
          username: 'agurl',
          email: 'agurl@gmail.com',
          password: 'pw123',
          role: 'volunteer',
          country: 'usa'
        },
        {
          name: 'Bill Mayzer',
          username: 'bm289',
          email: 'bm289@gmail.com',
          password: 'pw123',
          role: 'administrator',
          country: 'usa'
        },
        {
          name: 'Lizz StunYa',
          username: 'lgstunya',
          email: 'missstunya@gmail.com',
          password: 'pw123',
          role: 'administrator',
          country: 'europe'
        },
        {
          name: 'Brandon Mundok',
          username: 'racer290',
          email: 'racer290@gmail.com',
          password: 'pw123',
          role: 'student',
          country: 'france'
        },
      ]);
    });
};
