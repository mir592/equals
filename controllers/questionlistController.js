const Question = require('../models/questions');
const Answer = require('../models/answers');

module.exports = {

  listGet: (req, res, next) => {
    Question.find({}).then( question => {
      let random = parseInt(Math.random()*question.length);
      console.log(question);
      res.render("questions/questionsList", {
        question: question[random]
      });
    }).catch( error => console.log(error));
  },

  readAnswer: (req, res, next) => {
    const AnswerInfo = {
      questionID: req.params.id,
      answer: req.body.answer,
      userID: req.user._id,
    };
    console.log(AnswerInfo);
    //Ahora llega hasta aqui!
    const newAnswer = new Answer(AnswerInfo);
      newAnswer.save()
      .then(answer => res.redirect("/questionsList"))
      .catch(e => res.render("secret", {
        message: "Something went wrong"
      }));
  }
};
