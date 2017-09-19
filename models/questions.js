const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  question: String,
  answA: String,
  answB: String,
  answC: String,
  answD: String,
});

const Question = mongoose.model('Question', questionSchema);
module.exports = Question;
