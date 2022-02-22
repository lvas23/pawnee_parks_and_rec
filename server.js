const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const { type } = require('express/lib/response');
var SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

function filterByQuery(query, calendarArray) {
  let filteredResults = calendarArray;
  if (query.event) {
    filteredResults = filteredResults.filter(
      (calendar) => calendar.event === query.event
    );
  }
  if (query.dayOfTheWeek) {
    filteredResults = filteredResults.filter(
      (calendar) => calendar.dayOfTheWeek === query.dayOfTheWeek
    );
  }
  if (query.time) {
    filteredResults = filteredResults.filter(
      (calendar) => calendar.time === query.time
    );
  }
  return filteredResults;
}

function findById(id, calendarArray) {
  const result = calendarArray.filter((calendar = calendar.id === id))[0];
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

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const helpers = require('./utils/helpers');

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
