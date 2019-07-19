
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', table => {
        table.increments();
        table.string('name', 128)
            .notNullable();
        table.string('description')
            .notNullable();
        table.boolean('completed')
            .notNullable();
    })
    .createTable('actions', table => {
        table.increments();
        table.string('description')
            .notNullable();
        table.string('notes');
        table.integer('project_id')
            .notNullable()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        table.boolean('completed')
            .notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('actions')
    .dropTableIfExists('projects')
};
