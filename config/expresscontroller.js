const session = require('express-session');
const mongoose = require('mongoose');
const config = require('./config');

module.exports = function(app) {
  mongoose.connect(config.db, {
    useMongoClient: true
  }).then(() => console.log("conectado a DB"));
};
