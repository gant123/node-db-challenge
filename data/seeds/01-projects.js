exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('projects').insert([
        { name: 'God', description: 'Is the best', completed: 'false' },
        {
          name: 'All his GLory ',
          description: 'Saved me!!!!!!',
          completed: 'false'
        },
        {
          name: 'Money',
          description: 'Welp maybe it will work',
          completed: 'false'
        }
      ]);
    });
};
