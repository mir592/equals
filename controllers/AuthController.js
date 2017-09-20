const User = require("../models/users");
const passport = require("passport");
const bcrypt = require('bcrypt');
const bcryptSalt = 10;
const debug = require('debug')('app:auth:local');

module.exports = {
  signupGet: (req, res, next) => {
    res.render('auth/signup');
  },
  signupPost: ((req, res, next) => {
  const name = req.body.name;
  const alias = req.body.alias;
  const email = req.body.email;
  const password = req.body.password;

  if (alias === "" || password === "") {
    res.render("auth/signup", { message: "Indicate alias and password" });
    return;
  }

  User.findOne({ alias }, "alias", (err, user) => {
    if (user !== null) {
      res.render("auth/signup", { message: "The alias already exists" });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    debug("User created");

    const newUser = new User({
      name,
      alias,
      email,
      password: hashPass,
      pick: `/upload/${req.file.filename}`,
    })
    .save()
    .then(user => res.render('secret', {user}))
    .catch(e => res.render("auth/signup", { message: "Something went wrong" }));

  });
}),

  loginGet: (req, res, next) => {
    res.render('auth/login');
  },
  loginPost: passport.authenticate('local-login', {
    successRedirect: '/secret',
    failureRedirect: '/login'
  }),

  logout: (req, res, next) => {
    req.logout();
    res.redirect('/');
  },

  facebookGet: passport.authenticate("facebook"),
  facebookCallbackGet: passport.authenticate("facebook", {
    successRedirect: "/secret",
    failureRedirect: "/"
  })
};
