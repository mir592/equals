const Question = require('../models/questions');


module.exports = {
  listGet: (req, res, next) => {
    Question.find({}, (err, questions) => {
      if (err) {
        return next(err);
      }

  //Aqui filtro

      res.render("questions/questionsList", {
        questions: questions
      });
    });
  }
};
//
// router.get('/questionsList', (req, res, next) => {
//   Question.find({}, (err, questions) => {
//     if (err) {
//       return next(err);
//     }
//
// //Aqui filtro
//
//     res.render("questions/questionsList", {
//       questions: questions
//     });
//   });
// });
