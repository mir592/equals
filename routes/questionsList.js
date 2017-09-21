const express = require('express');
const User = require("../models/users");
const Question = require('../models/questions');
const Answers = require('../models/answers');
const passport = require('passport');
const debug = require('debug')("app:auth:local");
const router = require('express').Router();

router.get('/questionsList', (req, res, next) => {
  Question.find({}, (err, questions) => {
    if (err) {
      return next(err);
    }

//Aqui filtro

    res.render("questions/questionsList", {
      questions: questions
    });
  });
});


module.exports = router;
