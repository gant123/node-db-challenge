exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('actions')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('actions').insert([
        {
          project_id: 1,
          description: 'Coding is the best baby!',
          notes: 'action1',
          completed: 'false'
        },
        {
          project_id: 2,
          description: 'Im a Dog Whoof! Whoof!',
          notes: 'action2',
          completed: 'false'
        },
        {
          project_id: 3,
          description: 'Dont you wish you were cool lmao!',
          notes: 'action3',
          completed: 'false'
        }
      ]);
    });
};
