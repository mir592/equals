const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const answerSchema = new Schema({
  userID: String,
  questionID: String,
  answer: String,
},{
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const Answer = mongoose.model('Answer', answerSchema);
module.exports = Answer;
