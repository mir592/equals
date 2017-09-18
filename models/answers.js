const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const answerSchema = new Schema({
  userID: String,
  questionID: String,
  answer: String,
});

const Question = mongoose.model('Question', questionSchema);
module.exports = Question;
