const app = require('express')();
require('dotenv').load();
require('./config/passport')();
require('./config/express')(app);
require('./config/expressController')(app);

const index = require('./routes/index');

app.use('/', index);

require('./config/error-handler')(app);

module.exports = app;
