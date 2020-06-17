// const router = require('express').Router();

// const db = require('../data/dbQueries');

// router.get('/', async (req, res) => {
//     try {
//         const actions = await db.getActions();
//         res.json(actions);
//       } catch (err) {
//         res.status(500).json({ message: 'Failed to get the recipes' });
//       }
// })

// router.post('/', async (req, res) => {
//     try {
//         const action = await db.addAction(req.body);
//         res.status(201).json(action)
//     } catch (error) {
//         res.status(500).json({ message: 'could not create new action' })
//     }
// })

// module.exports = router;