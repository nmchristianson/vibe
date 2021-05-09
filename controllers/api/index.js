const router = require('express').Router();

const moodRoutes = require('./mood-routes');

router.use('/moods', moodRoutes);

module.exports = router;