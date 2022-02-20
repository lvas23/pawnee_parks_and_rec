const express = require('express');
const calendar = require('./data/calendar');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

function filterByQuery(query, calendarArray) {
    let filteredResults = calendarArray;
    if (query.event) {
        filteredResults = filteredResults.filter(calendar => calendar.event === query.event);
    }
    if (query.dayOfTheWeek) {
        filteredResults = filteredResults.filter(calendar => calendar.dayOfTheWeek === query.dayOfTheWeek);
    }
    if (query.time) {
        filteredResults = filteredResults.filter(calendar => calendar.time === query.time);
    }
    return filteredResults;
}

function findById(id, calendarArray) {
    const result = calendarArray.filter(calendar = calendar.id === id)[0];
    return result;
}

function createNewCalendar(body, calendarArray) {
    console.log(body);


    return body;
}

app.get('/api/calendar', (req, res) => {
    let results = calendar;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});

app.get('/api/calendar/:id', (req, res) => {
    const result = findById(req.params.id, calendar);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

app.post('/api/calendar', (req, res) => {
    req.body.id = calendar.length.toString();
    
    res.json(req.body)
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});