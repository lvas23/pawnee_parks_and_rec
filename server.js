const express = require('express');
const calendar = require('./data/calendar');
const PORT = process.env.PORT || 3001;
const fs = require('fs');
const path = require('path');
const { type } = require('express/lib/response');
const res = require('express/lib/response');

const app = express();

const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

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