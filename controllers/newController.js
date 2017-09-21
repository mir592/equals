const Question = require('../models/questions');

module.exports = {
  newGet: (req, res, next) => {
    res.render('questions/new');
  },
  newPost: (req, res, next) => {
    const questionInfo = {
      question: req.body.question,
      answA: req.body.answA,
      answB: req.body.answB,
      answC: req.body.answC,
      answD: req.body.answD
    };

    // if (question === "" || answA === "" || answB === "" || answC === "" || answD === "") {
    //   res.render("questions/new", {
    //     message: "Indicate question and answers"
    //   });
    //   return;
    // }

    const newQuestion = new Question(questionInfo);
      newQuestion.save()
      .then(question => res.redirect('/'))
      .catch(e => res.render("questions/new", {
        message: "Something went wrong"
      }));
  }
};
