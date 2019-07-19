const knex = require('knex');
const db = knex(require('../knexfile').development);

//POST for projetcs
// insert into projects ('name', 'description', 'completed')
//values ('hello', 'this is hello', 'no')
function getProjects(){
    return db('projects')
}
function getProjectAction(projectId) {
// select 
//      description,
//      name, 
//      notes 
// from projects
// join actions on projects.id = actions.project_id
    return db('projects')
      .join('actions', 'projects.id', 'actions.project_id')
      .select('name', 'projects.description')
      .where('project_id', projectId);
  }

function getProjectById(id){
    return db('projects')
        .where({ id })
}

function getActions(){
    return db('actions')
}

function addPost({ name, description, completed }){
    return db('projects')
        .insert({ name, description, completed })
        .then(ids => ({ id: ids[0] }));
}

function addAction({ notes, description, project_id, completed }) {
    // insert into 
    //     actions ('notes', 'description', 'project_id', 'completed')
    //     values ('hey', 'test', 1, 'false')
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
}