// const router = require('express').Router();
// const { filterByQuery, findById, createNewCalendarEvent, validateDb } = require('../../lib/calendar');
// const { db } = require('../../data/db');

// router.get('/db', (req, res) => {
//     let results = db;
//     if (req.query) {
//         results = filterByQuery(res.query, results);
//     }
//     res.json(results);
// });

// router.get('/db/:id', (req, res) => {
//     const result = findById(req.params.id, db);
//     if (result) {
//         res.json(result);
//     } else {
//         res.send(404);
//     }
// });

// router.post('/db', (req, res) => {
//     req.body.id = db.length.toString();

//     if (!validateDb(req.body)) {
//         res.status(400).send('The calendar event is not properly formatted.');
//     } else {
//         const db = createNewCalendarEvent(req.body, db);
//         res.json(db);
//     }
// });

// module.export = router;