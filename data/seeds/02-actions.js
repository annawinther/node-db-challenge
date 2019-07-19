
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        { project_id: 1, description: 'this is to test if the action works', notes: 'action1', completed: 'false' },
        { project_id: 2, description: 'this is also action test', notes: 'action2', completed: 'false' },
        { project_id: 3, description: 'action test yey!', notes: 'action3', completed: 'false' }
      ]);
    });
};