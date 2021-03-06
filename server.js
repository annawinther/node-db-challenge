const express = require('express');
const db = require('./data/dbQueries');
// const projectRouter = require('./routes/project-router');
// const actionRouter = require('./routes/actions-routes');

const server = express();

// server.use('/api/projects', projectRouter);
// server.use('/api/actions', actionRouter);

server.use(express.json());

server.get('/', (req, res) => {
    res.send("hello world")
})

server.get('/projects', async (req, res) => {
    try {
        const projects = await db.getProjects();
        res.json(projects);
      } catch (err) {
        res.status(500).json({ message: 'Failed to get the projects' });
      }
})
server.get('/projects/:id', async (req, res) =>{
    try {
        const projectId = req.params.id;
        const project = await db.getProjectById(projectId);
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
        res.status(500).json({ message: 'Failed to get the actions' });
      }
})

server.get('/projects/:id/actions', async (req, res) => {
    try {
        const projectId = req.params.id;
        const action = await db.getProjectAction(projectId);
        res.json(action)
    } catch (err) {
        res.status(500).json({ message: 'could not get actions for this project' })
    }
})

server.post('/projects', async (req, res) => {
    try {
        const projectData = req.body;
        const project = await db.addPost(projectData);
        if (projectData){
            res.status(201).json(projectData)
        } else {
            res.status(400).json({ message: 'missing project data' })
        }
      
    } catch (err) {
        res.status(500).json({ error: 'could not create new project' })
    }
})

server.post('/actions', async (req, res) => {
    try {
        const actionData = req.body;
        const action = await db.addAction(actionData);
        if (actionData){
            res.status(201).json(actionData)
        } else {
            res.status(400).json({ message: 'missing action data'})
        }
        
    } catch (err) {
        res.status(500).json({ message: 'could not create new action' })
    }
})

module.exports = server;