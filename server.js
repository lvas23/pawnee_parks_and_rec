const express = require('express');
const db = require('./data/db');
const PORT = process.env.PORT || 3001;

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

function findById(id, calendarItemsArray) {
    const result = calendarItemsArray.filter(db = db.id === id)[0];
    return result;
}

app.get('/api/db', (req, res) => {
    let results = db;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});

app.get('/api/db/:id', (req, res) => {
    const result = findById(req.params.id, db);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});