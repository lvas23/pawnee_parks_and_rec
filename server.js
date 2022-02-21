const express = require('express');
const calendar = require('./data/calendar');
const PORT = process.env.PORT || 3001;
const fs = require('fs');
const path = require('path');
const { type } = require('express/lib/response');
const res = require('express/lib/response');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(express.static('assets'));

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
    calendarArray.push(calendar);
    fs.writeFileSync(
        path.join(__dirname, './data/calendar.json'),
        JSON.stringify({ calendar: calendarArray }, null, 2)
    );
    return calendar;
}

function validateCalendar(calendar) {
    if (!calendar.event || typeof calendar.event !== 'string') {
        return false;
    }
    if (!calendar.dayOfTheWeek || typeof calendar.dayOfTheWeek !== 'string') {
        return false;
    }
    if (!calendar.time || typeof calendar.time !== 'string') {
        return false;
    }
    return true;
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

    if (!validateCalendar(req.body)) {
        res.status(400).send('The calendar item is not properly formatted.');
    } else{
    const calendar = createNewCalendar(req.body, calendar);
    res.json(calendar);
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

app.get('/calendar', (req, res) => {
    res.sendFile(path.join(__dirname, './calendar.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, './about.html'));
});

app.get('*', (req, res) => {
    res.sendDate(path.join(__dirname, './index.html'));
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});