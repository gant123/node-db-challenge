
exports.up = function(knex) {
  return (knex.schema 
    .createTable('projects', tbl => {
        tbl.increments();
        tbl.string('name', 128)
            .notNullable();
        tbl.string('description')
            .notNullable();
        tbl.boolean('completed')
            .notNullable();
    })
    .createTable('actions', tbl => {
       tbl.increments();
       tbl.string('description')
            .notNullable();
       tbl.string('notes');
       tbl.integer('project_id')
            .notNullable()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
       tbl.boolean('completed')
            .notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('actions')
    .dropTableIfExists('projects')
};
