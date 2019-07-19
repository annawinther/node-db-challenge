const knex = require('knex');
const db = knex(require('../knexfile').development);

//POST for projetcs
// insert into projects ('name', 'description', 'completed')
//values ('hello', 'this is hello', 'no')
function getProjects(){
    return db('projects')
}

function addPost({ name, description, completed }){
    return db('projects')
        .insert({ name, description, completed })
        .then(ids => ({ id: ids[0] }));
}

module.exports = {
    addPost,
    getProjects
}