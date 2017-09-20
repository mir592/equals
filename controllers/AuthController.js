const User = require("../models/users");
const passport = require("passport");

module.exports = {
  signupGet: (req, res, next) => { res.render('auth/signup'); },
  signupPost: passport.authenticate('local-signup', {
      successRedirect: '/',
      failureRedirect: '/auth/signup'
  }),

  loginGet: (req, res, next) => { res.render('auth/login'); },
  loginPost: passport.authenticate('local-login', {
    successRedirect : '/',
    failureRedirect : '/auth/login'
  }),

  logout: (req, res, next) => { req.logout(); res.redirect('/'); },

  facebookGet: passport.authenticate("facebook"),
  facebookCallbackGet: passport.authenticate("facebook", {
    successRedirect: "/",
    failureRedirect: "/"
  })
};
