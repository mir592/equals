const Question = require('../models/questions');

module.exports = {
    addGet: (req, res, next) => {
      res.render('add');
    },
    addPost: ('/add', (req, res, next) => {
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
          .then(question => res.render('added', {question}))
          .catch(e => res.render("add", {
            message: "Something went wrong"
          }));
        })
};
