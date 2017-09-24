const express = require("express");
const router = express.Router();
const User = require("../models/users");


router.get('/user/:id/edit', (req, res, next) => {
  const userId = req.params.id;

  User.findById(userId)
    .then(user => res.render('user/edit', {
      user: user
    }))
    .catch(err => next(err));
});


router.post('/user/:id', (req, res, next) => {
  const userId = req.params.id;

  const updates = {
    name: req.body.name,
    alias: req.body.alias,
    email: req.body.email,
    password: req.body.password,
    pick: req.body.pick,
  };

  User.findByIdAndUpdate(userId, updates, (err, user) => {
    if(err) {return next(err); }
    return res.redirect('/login');
  });
});


module.exports = router;
