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

server.post('/projects', async (req, res) => {
    try {
        const project = await db.addPost(req.body);
        res.status(201).json(project)
    } catch (err) {
        res.status(500).json({ error: 'could not create new post' })
    }
})

module.exports = server;