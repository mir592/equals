const express = require('express');
const User = require("../models/users");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;
const path = require('path');
const passport = require('passport');
const debug = require('debug')("app:auth:local");
const PATHS = require('./paths');

const router = require('express').Router();

router.get(PATHS.SIGNUP_PATH, (req, res, next) => {
  res.render("auth/signup");
});

router.post(PATHS.SIGNUP_PATH, (req, res, next) => {
  const name = req.body.name;
  const alias = req.body.alias;
  const email = req.body.email;
  const password = req.body.password;

  if (alias === "" || password === "") {
    res.render("auth/signup", { message: "Indicate username and password" });
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
    .then(user => res.redirect('/'))
    .catch(e => res.render("auth/signup", { message: "Something went wrong" }));

  });
});


router.get(PATHS.LOGIN_PATH,(req,res) =>{
  res.render('auth/login',{ message: req.flash("error") });
});

router.post(PATHS.LOGIN_PATH, passport.authenticate("local", {
  successRedirect: PATHS.ROOT_PATH,
  failureRedirect: PATHS.LOGIN_PATH,
  failureFlash: true,
  passReqToCallback: true
}));

router.post(PATHS.LOGOUT_PATH,(req,res) =>{
  req.logout();
  res.redirect(PATHS.ROOT_PATH);
});


// router.get("/auth/facebook", passport.authenticate("facebook"));
// router.get("/auth/facebook/callback", passport.authenticate("facebook", {
//   successRedirect: PATH.ROOT_PATH,
//   failureRedirect: PATH.ROOT_PATH
// }));

module.exports = router;
