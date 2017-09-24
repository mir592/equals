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
    //console.log(req.user._id);
    Answer.find({
        userID: req.user._id
      })
      .then(result => {
        result.forEach(function(e, i) {
          userResponse.push([e.userID, e.questionID, e.answer]);
        });
      });
    User.find()
      .then(resultusers => {
        for (var i = 0; i < resultusers.length; i++) {
          arrayUsers.push(resultusers[i]._id);
        }
      });
    Answer.find()
      .then(result => {
        result.forEach(function(e, i) {
          respuestas.push([e.userID, e.questionID, e.answer]);
          for (let i = 0; i < userResponse.length; i++) {
            let preguntaUsuario = userResponse[i][1].toString();
            let respuestaUsuario = userResponse[i][2];
            //console.log('resultado del primer FOR', i, preguntaUsuario, respuestaUsuario);
            for (let k = 0; k < arrayUsers.length; k++) {
              console.log('log del for K', arrayUsers[k]);
              for (let j = 0; j < respuestas.length - 1; j++) {
                let IDusuarios = respuestas[j][0];
                let preguntaUsuarios = respuestas[j][1].toString();
                let respuestaUsuarios = respuestas[j][2];
                //console.log('resultado del segundo FOR de TODOS', preguntaUsuarios , respuestaUsuarios );
                //console.log('usuario 1' , respuestas[j][0]);
                //console.log('usuario 2' , respuestas[j+1][0]);
                if (userResponse[i][0].toString() != arrayUsers[k].toString()) {
                  if (respuestas[j][0].toString() === arrayUsers[k].toString()) {
                    console.log('IF DE USUARIO');
                    if (userResponse[i][1].toString() === respuestas[j][1].toString()) {
                      console.log('IF DE PREGUNTAS');
                      if (userResponse[i][2].toString() === respuestas[j][2].toString()) {
                        console.log('IF DE RESPUESTAS');
                        count = count + 1;
                        console.log(count);
                      }
                    }
                  }
                }
              }
            }
            console.log('EL CONTADOR', count);
          }


        });
      }).then(

      );
    //
    //COGER EL ID Y GUARDARLO EN UN ARRAY
  },


  comparePost: (req, res, next) => {
    res.redierct('/compare');
  }
};
