const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const answerSchema = new Schema({
  questionID: String,
  answer: String,
});

const Answer = mongoose.model('Answer', answerSchema);
module.exports = Answer;
