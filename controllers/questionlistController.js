const Question = require('../models/questions');


module.exports = {
  listGet: (req, res, next) => {
    Question.find({}, (err, questions) => {
      //console.log(questions);
      if (err) {
        return next(err);
      }
      let random = parseInt(Math.random()*questions.length);
      console.log(random);
      console.log(questions.length);

      //Aqui filtro --> Guardar como un objeto
      
      res.render("questions/questionsList", {
        questions: questions[random]
      });
    });
  }
};
