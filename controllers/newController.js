const Question = require('../models/questions');

module.exports = {
  newGet: (req, res, next) => {
    res.render('questions/new');
  },
  newPost: (req, res, next) => {
    // const questionInfo = {
    //   question: req.body.question,
    //   answA: req.body.answA,
    //   answB: req.body.answB,
    //   answC: req.body.answC,
    //   answD: req.body.answD
    // };

    const questionInfo = {
      question : req.body.question,
      answers : [ req.body.answA,
                  req.body.answB,
                  req.body.answC,
                  req.body.answD]
    };

    const newQuestion = new Question(questionInfo);
      newQuestion.save()
      .then(question => res.redirect('/secret'))
      .catch(e => res.render("questions/new", {
        message: "Something went wrong"
      }));
  }
};
