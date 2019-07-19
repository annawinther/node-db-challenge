const express = require('express');
const db = require('./data/dbQueries');
// const db = require('./data/dbQueries');
// const projectRouter = require('./projects/project-router');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send("hello world")
})
server.get('/projects', async (req, res) => {
    try {
        const projects = await db.getProjects();
        res.json(projects);
      } catch (err) {
        res.status(500).json({ message: 'Failed to get the recipes' });
      }
})
server.get('/projects/:id', async (req, res) =>{
    try {
        const project = await db.getProjectById(req.params.id);
        res.status(200).json(project)
    } catch (err) {
        res.status(500).json({ message: 'could not get project with that id'})
    }
})
server.get('/actions', async (req, res) => {
    try {
        const actions = await db.getActions();
        res.json(actions);
      } catch (err) {
        res.status(500).json({ message: 'Failed to get the recipes' });
      }
})
server.get('/projects/:id/actions', async (req, res) => {
    try {
        const projectId = req.params.id;
        const actions = await db.getProjectAction(projectId);
        res.json(actions)
    } catch (err) {
        res.status(500).json({ message: 'could not get actions for this project' })
    }
})

server.post('/projects', async (req, res) => {
    try {
        const project = await db.addPost(req.body);
        res.status(201).json(project)
    } catch (err) {
        res.status(500).json({ error: 'could not create new post' })
    }
})

server.post('/actions', async (req, res) => {
    try {
        const action = await db.addAction(req.body);
        res.status(201).json(action)
    } catch (error) {
        res.status(500).json({ message: 'could not create new action' })
    }
})

module.exports = server;