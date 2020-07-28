exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks')
      .insert([
        {
          taskName: 'item 0',
          taskDescription: 'Get this list done, and your well on your way to becoming a volunteer'
        },
        {
          taskName: 'item 1',
          taskDescription: 'Pay it forward. What good has been done unto you, do unto others'
        },
        {
          taskName: 'item 2',
          taskDescription: 'Hit the books. These are young, hungry minds. Satisfy, be the best you can be'
        },
      ]);
    });
};
