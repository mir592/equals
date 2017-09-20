const app = require('express')();
require('dotenv').load();
require('./config/passport')();
require('./config/express')(app);
require('./config/expressController')(app);

const index = require('./routes/index');
const authController = require('./routes/auth');
const addController = require('./routes/add');
const viewQues = require('./routes/answQuest');

app.use('/', index);
app.use('/', authController);
app.use('/', addController);
app.use('/', viewQues);

require('./config/error-handler')(app);

module.exports = app;
