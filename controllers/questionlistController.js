const Question = require('../models/questions');
const Answers = require('../models/answers');

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
  readAnswer: (req, res, next) =>{
    console.log(req.body);
    res.send('holi');
    let answer = req.body;
    answer.save()
    .then(listGet())
    .catch(e => res.render("questions/new", {
      message: "Something went wrong"
    }));
    //guardar respuesta .then
    // busca una nueva then
    // envia la respuesta
  }
};
