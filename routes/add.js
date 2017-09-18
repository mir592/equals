const express = require('express');
const User = require("../models/users");
const Question = require('../models/questions');
const path = require('path');
const passport = require('passport');
const debug = require('debug')("app:auth:local");
const PATHS = require('./paths');

const router = require('express').Router();

router.get(PATHS.ADD_PATH, (req, res, next) => {
  res.render("add");
});
router.post(PATHS.ADD_PATH, (req, res, next) => {
const question = req.body.question;
const answA = req.body.answA;
const answB = req.body.answB;
const answC = req.body.answC;
const answD = req.body.answD;


if (question === "" || answA === "" || answB === "" || answC === "" || answD === "") {
  res.render("add", {
    message: "Indicate question and answers"
  });
  return;
}



const newQuestion = new Question({
    question,
    answA,
    answB,
    answC,
    answD
  })
  .save()
  .then(res.render('added'))
  .catch(e => res.render("add", {
    message: "Something went wrong"
  }));

});




module.exports = router;
