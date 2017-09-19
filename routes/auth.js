const express = require('express');
const User = require("../models/users");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;
const path = require('path');
const passport = require('passport');
const debug = require('debug')("app:auth:local");
const PATHS = require('./paths');
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const multer  = require('multer');

var upload = multer({ dest: './public/uploads/' });
const router = require('express').Router();

router.get(PATHS.SIGNUP_PATH, (req, res, next) => {

});



router.post(PATHS.SIGNUP_PATH, upload.single('photo'), (req, res, next) => {
console.log(req.file);
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
    .then(user => res.render('index', {user}))
    .catch(e => res.render("auth/signup", { message: "Something went wrong" }));

  });
});


router.get(PATHS.LOGIN_PATH,(req,res) =>{
  res.render('auth/login',{ message: req.flash("error") });
});

router.post(PATHS.LOGIN_PATH, (req, res, next) => {
  var alias = req.body.alias;
  var password = req.body.password;

  if (alias === "" || password === "") {
    console.log("ESTA VACIO");
    res.render("auth/login", {message: "Indicate a username and a password to sign up" });
    console.log("entro en error");
    return;
  }

  User.findOne({ "alias": alias }, (err, user) => {
      if (err || !user) {
        res.render("auth/login", {
          message: "The username doesn't exist"
        });
        return;
      }
      if (bcrypt.compareSync(password, user.password)) {
        // Save the login in the session!
        req.session.user = user;
        res.render('index', {user});
        console.log("entro en password correcto");
      } else {
        console.log("entro en password incorrect");
        res.render("auth/login", {
          message: "Incorrect password"
        });
      }
  });
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


router.get("/auth/facebook", passport.authenticate("facebook"));
router.get("/auth/facebook/callback", passport.authenticate("facebook", {
  successRedirect: PATHS.ROOT_PATH,
  failureRedirect: PATHS.ROOT_PATH
}));

module.exports = router;
