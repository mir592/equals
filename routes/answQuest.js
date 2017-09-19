const express = require('express');
const User = require("../models/users");
const Question = require('../models/questions');
const Answers = require('../models/answers');
const path = require('path');
const passport = require('passport');
const debug = require('debug')("app:auth:local");
const PATHS = require('./paths');

const router = require('express').Router();

router.get(PATHS.VIEW_QUESTION, (req, res, next) => {
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
