const User = require("../models/users");
const Question = require('../models/questions');
const Answer = require('../models/answers');


module.exports = {

  compareGet: (req, res, next) => {

    let userResult = [];
    let arrayUsers = [];

    console.log(req.user._id);
    Answer.find({userID : req.user._id})
    .then(result => {
      userResult = result;
      console.log(userResult);
    });
    User.find()
    .then(resultusers => {


      
      console.log(arrayUsers);
      //COGER EL ID Y GUARDARLO EN UN ARRAY
    });
  },


  comparePost: (req, res, next) => {
  }
};
