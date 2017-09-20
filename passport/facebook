const passport = require('passport');
const User = require('../models/users');
const FbStrategy = require('passport-facebook').Strategy;

passport.use(new FbStrategy({
  clientID: '1929801070619434',
  clientSecret: '5e2c563ea7420d40436a23853e3c59b2',
  callbackURL: "/auth/facebook/callback"
}, (accessToken, refreshToken, profile, next) => {
  console.log(profile);
  User.findOne({ facebookID: profile.id }, (err, user) => {
    if (err) {
      return next(err);
    }
    if (user) {
      return next(null, user);
    }

    const newUser = new User({
      facebookID: profile.id,
      username: profile.displayName
    });

    newUser.save((err) => {
      if (err) {
        return next(err);
      }
      next(null, newUser);
    });
  });

}));
