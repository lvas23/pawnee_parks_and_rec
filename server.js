const express = require('express');
const db = require('./data/db');

const app = express();

function filterByQuery(query, dbArray) {
    let filteredResults = dbArray;
    if (query.event) {
        filteredResults = filteredResults.filter(db => db.event === query.event);
    }
    if (query.dayOfTheWeek) {
        filteredResults = filteredResults.filter(db => db.dayOfTheWeek === query.dayOfTheWeek);
    }
    if (query.time) {
        filteredResults = filteredResults.filter(db => db.time === query.time);
    }
    return filteredResults;
}

app.get('/api/db', (req, res) => {
    let results = db;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});

app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
});