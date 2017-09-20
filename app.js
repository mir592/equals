const app = require('express')();
require('dotenv').load();
require('./config/passport')();
require('./config/express')(app);
require('./config/expressController')(app);

const index = require('./routes/index');
const authController = require('./routes/auth');

app.use('/', index);
app.use('/', authController);

require('./config/error-handler')(app);

module.exports = app;
