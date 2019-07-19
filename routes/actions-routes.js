const router = require('express').Router();

const db = require('../data/dbQueries');

router.get('/', async (req, res) => {
    try {
        const actions = await db.getActions();
        res.json(actions);
      } catch (err) {
        res.status(500).json({ message: 'Failed to get the recipes' });
      }
})


module.exports = router;