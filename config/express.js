const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const logger = require('morgan');
const path = require('path');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config');
const layouts = require('express-ejs-layouts');

module.exports = function(app) {
  app.set('views', config.rootPath + 'views');
  app.set('view engine', 'ejs');
  app.use(layouts);
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: false
  }));
  app.use(cookieParser());
  app.use(express.static(config.rootPath + 'public'));
  app.use(session({
    secret: 'basicsecret',
    cookie: { maxAge: 60000 },
    resave: false, //no sabemos si es TRUE o FALSE
    saveUninitialized: true,
    store: new MongoStore( {
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60 // 1 day
    })
  }));
  app.use(function(req, res, next) {
    res.locals.user = req.user;
    res.locals.title = 'PROYECT 2';
    next();
  });
  app.use(passport.initialize());
  app.use(passport.session());
};
