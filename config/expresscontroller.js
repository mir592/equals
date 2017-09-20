const session = require('express-session');
const mongoose = require('mongoose');
const config = require('./config');

module.exports = function(app) {
  mongoose.connect(config.db, {
    useMongoClient: true
  }).then(() => console.log("conectado a DB"));
  app.use((req, res, next) => {
    res.locals.user = req.user;
    next();
  });
};
