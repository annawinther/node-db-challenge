
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'test', description: 'this is to test', completed: 'false'},
        {name: 'test2', description: 'this also a test', completed: 'false'},
        {name: 'test3', description: 'try and see if this works', completed: 'false'}
      ]);
    });
};
