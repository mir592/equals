const User = require("../models/users");
const Question = require('../models/questions');
const Answer = require('../models/answers');


module.exports = {
  compareGet: (req, res, next) => {
    let userResponse = [];
    let arrayUsers = [];
    let arrayResponseAll = [];
    let respuestas = [];
    let count = 0;
    let numUsuario = 0;

    User.find()
    .then(resultusers => {
      for (var i = 0; i < resultusers.length; i++) {
        arrayUsers.push(resultusers[i]._id);
      }
    });

    Answer.find({
        userID: req.user._id
      })
    .then(result => {
      result.forEach(function(e, i) {
        userResponse.push([e.userID, e.questionID, e.answer]);
      });
    });


    Answer.find()
    .then(result => {
      console.log(result);
    });



  }
};
