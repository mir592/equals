const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const answerSchema = new Schema({
  userID: String,
  questionID: String,
  answer: String,
});

const Answer = mongoose.model('Answer', answerSchema);
module.exports = Answer;
