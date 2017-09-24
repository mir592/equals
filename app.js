const app = require('express')();
require('dotenv').load();
require('./config/passport')();
require('./config/express')(app);
require('./config/expressController')(app);

const index = require('./routes/index');
const authController = require('./routes/auth');
const newController = require('./routes/new');
const questionsRoutes = require('./routes/questionsList');
const userRoutes = require('./routes/user');
const compare = require('./routes/compare');

app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

app.use('/', index);
app.use('/', authController);
app.use('/', newController);
app.use('/', questionsRoutes);
app.use('/', userRoutes);
app.use('/', compare);

require('./config/error-handler')(app);

module.exports = app;
