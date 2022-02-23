const router = require('express').Router();

// const apiRoutes = require('./api')

const homeRoutes = require('./post-routes');
// const aboutRoutes = require()
// const eventsRoutes = require('./calendarRoutes');

// router.use('/events', eventsRoutes);
router.use('/', homeRoutes);
module.exports = router;
