const router = require('express').Router();

const apiRoutes = require('./api')

const homeRoutes = require('./homepage');
// const aboutRoutes = require()
// const eventsRoutes = require('./calendarRoutes');

// router.use('/events', eventsRoutes);
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
