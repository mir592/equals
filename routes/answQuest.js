const express = require('express');
const User = require("../models/users");
const Question = require('../models/questions');
const Answers = require('../models/answers');
const passport = require('passport');
const debug = require('debug')("app:auth:local");
const router = require('express').Router();

router.get('/viewQues', (req, res, next) => {
  Question.find({}, (err, question) => {
    if (err) {
      return next(err);
    }

    res.render("viewQues", {
      question: question
    });
  });
});

module.exports = router;
