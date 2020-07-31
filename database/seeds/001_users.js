
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
          country: 'usa',
          daysAvailable: 'Monday, Tuesday Thursday, Saturday',
          timeAvailable: '11am-3pm EST'
        },
        {
          name: 'Stacie Moore',
          username: 'stacie',
          email: 'staciem@gmail.com',
          password: 'pw4598',
          role: 'volunteer',
          country: 'brazil',
          daysAvailable: 'Tuesday, Thursday, Friday, Saturday',
          timeAvailable: '8am-6pm EST'
        },
        {
          name: 'Elizabeth Lynce',
          username: 'bballergurl',
          email: 'basketballislife@yahoo.com',
          password: 'toofast4u',
          role: 'student',
          country: 'usa',
          daysAvailable: 'Thursday, Friday, Saturday, Sunday',
          timeAvailable: '6am-4pm EST'
        },
        {
          name: 'John Row',
          username: 'jrow18',
          email: 'jrow@gmail.com',
          password: 'pw123',
          role: 'volunteer',
          country: 'usa',
          daysAvailable: 'Monday, Wednesday, Thursday, Friday, Saturday',
          timeAvailable: '10am-9pm EST'
        },
        {
          name: 'Abigail Smith',
          username: 'agurl',
          email: 'agurl@gmail.com',
          password: 'pw123',
          role: 'volunteer',
          country: 'usa',
          daysAvailable: 'Monday, Wednesday, Thursday, Friday, Saturday',
          timeAvailable: '2pm-9pm EST'
        },
        {
          name: 'Bill Mayzer',
          username: 'bm289',
          email: 'bm289@gmail.com',
          password: 'pw123',
          role: 'administrator',
          country: 'usa',
          daysAvailable: 'Monday, Wednesday, Thursday, Friday, Saturday',
          timeAvailable: '7am-5pm EST'
        },
        {
          name: 'Lizz StunYa',
          username: 'lgstunya',
          email: 'missstunya@gmail.com',
          password: 'pw123',
          role: 'administrator',
          country: 'europe',
          daysAvailable: 'Monday, Tuesday, Wednesday, Thursday, Friday',
          timeAvailable: '7am-5pm EST'
        },
        {
          name: 'Brandon Mundok',
          username: 'racer290',
          email: 'racer290@gmail.com',
          password: 'pw123',
          role: 'student',
          country: 'france',
          daysAvailable: 'Monday, Tuesday, Wednesday, Thursday, Friday',
          timeAvailable: '7am-5pm EST'
        },
      ]);
    });
};
