// const router = require('express').Router();

// const db = require('../data/dbQueries');


// router.get('/', async (req, res) => {
//     try {
//         const projects = await db.getProjects();
//         res.json(projects);
//       } catch (err) {
//         res.status(500).json({ message: 'Failed to get the projects' });
//       }
// })

// router.get('/:id', async (req, res) =>{
//     try {
//         // const projectId = req.params.id;
//         const project = await db.getProjectById(req.params.id);
//         res.status(200).json(project)
//     } catch (err) {
//         res.status(500).json({ message: 'could not get project with that id'})
//     }
// })

// // router.post('/', async (req, res) => {
// //     try {
// //         const project = await db.addPost(req.body);
// //         res.status(201).json(project)
// //     } catch (err) {
// //         res.status(500).json({ error: 'could not create new post' })
// //     }
// // })

// module.exports = router;