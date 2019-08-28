const knex = require('knex');
const db = knex(require('../knexfile').development);

function getProjects() {
  return db('projects');
}

function getProjectAction(projectId) {
  return db('projects')
    .join('actions', 'projects.id', 'actions.project_id')
    .select(
      'actions.id',
      'actions.description',
      'notes',
      'actions.completed',
      'project_id'
    )
    .where('project_id', projectId);
}

function getProjectById(id) {
  return (
    db('projects')
      //could not figure out why i couldnt get this to work by joining tables
      // .join('actions', 'projects.id', 'actions.project_id')
      // .select('actions')
      .where({ id })
  );
}

function getActions() {
  return db('actions');
}

function addPost({ name, description, completed }) {
  return db('projects')
    .insert({ name, description, completed })
    .then(ids => ({ id: ids[0] }));
}

function addAction({ notes, description, project_id, completed }) {
  return db('actions')
    .insert({ notes, description, project_id, completed })
    .then(ids => ({ id: ids[0] }));
}

module.exports = {
  addPost,
  getProjects,
  getProjectById,
  addAction,
  getProjectAction,
  getActions
};
