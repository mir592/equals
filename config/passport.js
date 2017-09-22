const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const FbStrategy = require('passport-facebook').Strategy;
const User = require('../models/users');
const bcrypt = require('bcrypt');
const dotenv = require ("dotenv").load();



module.exports = function() {
  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });

  passport.deserializeUser((id, cb) => {

    User.findById(id, (err, user) => {
      if (err) { return cb(err); }
      cb(null, user);
    });
  });


  passport.use('local-login', new LocalStrategy({
    usernameField: 'alias',
    passwordField: 'password'
  }, (alias, password, next) => {
    User.findOne({
      alias
    }, (err, user) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return next(null, false, {
          message: "Incorrect alias"
        });
      }
      if (!bcrypt.compareSync(password, user.password)) {
        return next(null, false, {
          message: "Incorrect password"
        });
      }
      return next(null, user);
    });
  }));
};

passport.use(new FbStrategy({
  clientID: '693354650864885',
  clientSecret: '46269762ce4e3895a7c17dd47dcc53db',
  callbackURL: "/auth/facebook/callback"
}, (accessToken, refreshToken, profile, done) => {
  User.findOne({ facebookID: profile.id }, (err, user) => {
    if (err) {
      return done(err);
    }
    if (user) {
      return done(null, user);
    }

    const newUser = new User({
      facebookID: profile.id
    });

    newUser.save((err) => {
      if (err) {
        return done(err);
      }
      done(null, newUser);
    });
  });

}));
