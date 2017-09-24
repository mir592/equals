const mongoose = require('mongoose');
const Question = require('../models/questions');
const {
  dbURL
} = require('../config/db');
console.log(dbURL);

mongoose.connect(dbURL, {
    useMongoClient: true
  })
  .then(console.log("Dentro de DB"));


const questions = [{
    question: '¿Qué superpoder tendrías?',
    answers: ['Volar',
      'Ser invisible',
      'Comer sin llenarme nunca',
      'Vivir para siempre',
    ]
  }, {
    question: '¿Qué hooby te llama más la atención?',
    answers: ['Yoga',
      'Videojuegos',
      'Bingo',
      'Fútbol',
    ]
  }, {
    question: '¿Qué personaje histórico te gustaría conocer?',
    answers: ['Jesucristo',
      'Alfonso XII',
      'Jordi Hurtado',
      'Francisco Franco',
    ]
  }, {
<<<<<<< HEAD
=======
    question: '¿Serías capaz de perdonar una infidelidad si supieras que esa persona realmente te ama?',
    answers: ['Sí',
      'No',
      'Tendría que vivirlo para saberlo',
      'Jamás'
    ]
  }, {
>>>>>>> 3f27afdb9a8329be0cab637c4d5dc8b75d895d2d
    question: '¿Qué ingrediente de estos te gusta más en la pizza?',
    answers: ['Bacon',
      'Atún',
      'Todo el queso que se pueda',
      'Alcaparras',
    ]
  }, {
    question: '¿Preferirías viajar al futuro o al pasado?',
    answers: ['Al pasado',
      'Al futuro',
      'No, yo estoy bien, gracias.',
      'A donde sea con tal de salir a dar una vuelta',
    ]
  }, {
    question: '¿Qué tipo de personaje famoso querrías ser?',
    answers: ['Político',
      'Cantante',
      'Escritor',
      'Asesino en serie'
    ],
  }, {
    question: '¿Qué es aquello que no soportas en los demás?',
    answers: ['Todo en general',
      'La hipocresía',
      'A la gente borde',
      'Nada en concreto',
    ]
  }, {
    question: '¿Dónde serían tus vacaciones ideales?',
    answers: ['Playa',
      'Montaña',
      'Disneylandia',
      'En un pueblo pequeño',
    ]
  }, {
    question: ' ¿Cuál era tu serie de dibujos animados favorita?',
    answers: ['Dragon Ball',
      'Spiderman',
      'Sailor Moon',
      'La vuelta al mundo en 80 días',
    ]
  }, {
    question: 'Si pudieras aprender a hacer algo nuevo, ¿qué eligirías?',
    answers: ['Tocar la guitarra',
      'Un lenguaje de programación',
      'Un nuevo idioma',
      'Cocinar mejor',
    ]
  }, {
    question: '¿Eres de los que sacrificaría la vida de una persona para salvar a cien?',
    answers: ['Hombre claro',
      'No, ¡que pena!',
      'Depende de la persona',
      'Depende del grupo de personas',
    ]
  }, {
    question: '¿Prefieres una vida llena de sexo pero comiendo fatal, o una vida sin sexo llena de ricos manjares?',
    answers: ['Sexo siempre',
      'Comer bien claro',
      'Prefiero morir a elegir esto',
      'Depende de como sea mi pareja en la cama',
    ]
  }, {
    question: '¿Crees que te conoces bien?',
    answers: ['Sí',
      'No',
      'Bueno, estamos trabajando en ello',
      'Yo paso de conocerme',
    ]
  }, {
    question: ' ¿Qué tipo de sentido del humor tienes?',
    answers: ['No tengo.',
      'Negro',
      'A mi cualquier cosa me hace gracia',
      'Yo solo me rio de algunas cosas, el humor debe tener límites.',
    ]
  }, {
    question: '¿Prefieres leer ficción o no ficción?',
    answers: ['Ficción',
      'No Ficción',
      '¿Leer?',
      'Antes leía la etiqueta del cahmpú, pero ya ni eso.',
    ]
  }, {
    question: '¿Qué te gusta más, los perros o los gatos?',
    answers: ['Los perros',
      'Los gatos',
      'Ninguno de los dos',
      'Los dos',
    ]
  }, {
    question: '¿Cual de estas series es mejor para ti?',
    answers: ['Breaking Bad',
      'Juego de Tronos',
      'Los Serranos',
      'The Wire',
    ]
  }, {
    question: 'Si tu vida fuera una película ¿De qué genero sería?',
    answers: ['Un drama',
      'Terror del bueno',
      'Una comedia muy loca',
      'Policiaca',
    ]
  },

];

Question.create(questions)
  .then(ques => {
    console.log(ques);
    mongoose.connection.close();
  });
