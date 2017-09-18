const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  question: String,
  answer: [a,b,c,d, null]
});

const Question = mongoose.model('Question', questionSchema);
module.exports = Question;
