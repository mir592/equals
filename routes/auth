const express = require('express');
const User = require("../models/users");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;
const path = require('path');
const passport = require('passport');
const debug = require('debug')("app:auth:local");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const ensureLogin = require("connect-ensure-login");
const router = require('express').Router();
const flash = require("connect-flash");

router.get('/signup', (req, res, next) => {
  res.render("auth/signup");
});

router.post('/signup', (req, res, next) => {
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
      password: hashPass
    })
    .save()
    .then(user => res.render('index', {user}))
    .catch(e => res.render("auth/signup", { message: "Something went wrong" }));

  });
});


router.get('/login',(req,res) =>{
  res.render('auth/login',{ message: req.flash("error") });
});


router.post('/login', passport.authenticate("local", {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true,
  passReqToCallback: true
}));

router.post('/logout',(req,res) =>{
  req.logout();
  res.redirect('/');
});


router.get("/auth/facebook", passport.authenticate("facebook"));
router.get("/auth/facebook/callback", passport.authenticate("facebook", {
  successRedirect: '/',
  failureRedirect: '/'
}));

module.exports = router;
// router.post('/login', (req, res, next) => {
//   var alias = req.body.alias;
//   var password = req.body.password;
//
//   if (alias === "" || password === "") {
//     console.log("ESTA VACIO");
//     res.render("auth/login", {message: "Indicate a username and a password to sign up" });
//     console.log("entro en error");
//     return;
//   }
//
//   User.findOne({ "alias": alias }, (err, user) => {
//       if (err || !user) {
//         res.render("auth/login", {
//           message: "The username doesn't exist"
//         });
//         return;
//       }
//       if (bcrypt.compareSync(password, user.password)) {
//         // Save the login in the session!
//         req.session.user = user;
//         res.render('index', {user});
//         console.log("entro en password correcto");
//       } else {
//         console.log("entro en password incorrect");
//         res.render("auth/login", {
//           message: "Incorrect password"
//         });
//       }
//   });
// });
