const router = require('express').Router();

const moodRoutes = require('./mood-routes');
const userRoutes = require('./user-routes');

router.use('/moods', moodRoutes);
router.use('/users', userRoutes);

module.exports = router;