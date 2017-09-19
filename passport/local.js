const bcrypt = require("bcrypt");
const passport = require('passport');
const User = require('../models/users');
const LocalStrategy = require("passport-local").Strategy;
const path = require('path');
const debugPath = "app:"+path.basename(__filename).split('.')[0];
const debug = require('debug')(debugPath);


passport.use(new LocalStrategy((alias, password, next) => {
  User.findOne({ alias }, (err, user) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      debug('Incorrect Alias');
      return next(null, false, { message: "Incorrect Alias" });
    }
    if (!bcrypt.compareSync(password, user.password)) {
      debug('Incorrect Passworddddd');
      return next(null, false, { message: "Incorrect password" });
    }
    debug('Logged in user');
    return next(null, user);
  });
}));
