const mongoose = require('mongoose');
const User = require('../models/questions');
const {
  dbURL
} = require('../config/db');
mongoose.connect(dbURL, {
  useMongoClient: true
});


const questions = [{
    question: '¿Qué superpoder tendrías?',
    answA: 'Volar',
    answB: 'Ser invisible',
    answC: 'Comer sin llenarme nunca',
    answD: 'Vivir para siempre',
  }, {
    question: '¿Qué hooby te llama más la atención?',
    answA: 'Yoga',
    answB: 'Videojuegos',
    answC: 'Bingo',
    answD: 'Fútbol',
  }, {
    question: '¿Qué personaje histórico te gustaría conocer?',
    answA: 'Jesucristo',
    answB: 'Alfonso XII',
    answC: 'Jordi Hurtado',
    answD: 'Francisco Franco',
  }, {
    question: '¿Serías capaz de perdonar una infidelidad si supieras que esa persona realmente te ama?',
    answA: 'Sí',
    answB: 'No',
    answC: 'Tendría que vivirlo para saberlo',
    answD: 'Jamás',
  }, {
    question: '¿Qué ingrediente de estos te gusta más en la pizza?',
    answA: 'Bacon',
    answB: 'Atún',
    answC: 'Todo el queso que se pueda',
    answD: 'Alcaparras',
  }, {
    question: '¿Preferirías viajar al futuro o al pasado?',
    answA: 'Al pasado',
    answB: 'Al futuro',
    answC: 'No, yo estoy bien, gracias.',
    answD: 'A donde sea con tal de salir a dar una vuelta',
  }, {
    question: '¿Qué tipo de personaje famoso querrías ser?',
    answA: 'Político',
    answB: 'Cantante',
    answC: 'Escritor',
    answD: 'Asesino en serie',
  }, {
    question: '¿Qué es aquello que no soportas en los demás?',
    answA: 'Todo en general',
    answB: 'La hipocresía',
    answC: 'A la gente borde',
    answD: 'Nada en concreto',
  }, {
    question: '¿Dónde serían tus vacaciones ideales?',
    answA: 'Playa',
    answB: 'Montaña',
    answC: 'Disneylandia',
    answD: 'En un pueblo pequeño',
  }, {
    question: ' ¿Cuál era tu serie de dibujos animados favorita?',
    answA: 'Dragon Ball',
    answB: 'Spiderman',
    answC: 'Sailor Moon',
    answD: 'La vuelta al mundo en 80 días',
  }, {
    question: 'Si pudieras aprender a hacer algo nuevo, ¿qué eligirías?',
    answA: 'Tocar la guitarra',
    answB: 'Un lenguaje de programación',
    answC: 'Un nuevo idioma',
    answD: 'Cocinar mejor',
  }, {
    question: '¿Eres de los que sacrificaría la vida de una persona para salvar a cien?',
    answA: 'Hombre claro',
    answB: 'No, ¡que pena!',
    answC: 'Depende de la persona',
    answD: 'Depende del grupo de personas',
  }, {
    question: '¿Prefieres una vida llena de sexo pero comiendo fatal, o una vida sin sexo llena de ricos manjares?',
    answA: 'Sexo siempre',
    answB: 'Comer bien claro',
    answC: 'Prefiero morir a elegir esto',
    answD: 'Depende de como sea mi pareja en la cama',
  }, {
    question: '¿Crees que te conoces bien?',
    answA: 'Sí',
    answB: 'No',
    answC: 'Bueno, estamos trabajando en ello',
    answD: 'Yo paso de conocerme',
  }, {
    question: ' ¿Qué tipo de sentido del humor tienes?',
    answA: 'No tengo.',
    answB: 'Negro',
    answC: 'A mi cualquier cosa me hace gracia',
    answD: 'Yo solo me rio de algunas cosas, el humor debe tener límites.',
  }, {
    question: '¿Prefieres leer ficción o no ficción?',
    answA: 'Ficción',
    answB: 'No Ficción',
    answC: '¿Leer?',
    answD: 'Antes leía el la etiqueta del cahmpú, pero ya ni eso.',
  }, {
    question: '¿Qué te gusta más, los perros o los gatos?',
    answA: 'Los perros',
    answB: 'Los gatos',
    answC: 'Ninguno de los dos',
    answD: 'Los dos',
  }, {
    question: '¿Cual de estas series es mejor para ti?',
    answA: 'Breaking Bad',
    answB: 'Juego de Tronos',
    answC: 'Los Serranos',
    answD: 'The Wire',
  }, {
    question: 'Si tu vida fuera una película ¿De qué genero sería?',
    answA: 'Un drama',
    answB: 'Terror del bueno',
    answC: 'Una comedia muy loca',
    answD: 'Policiaca',
  },

];

Question.create(questions, (err, docs) => {
  if (err) {
    throw err;
  }
  mongoose.connection.close();
});
