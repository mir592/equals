const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const answerSchema = new Schema({
  questionID: [Schema.Types.ObjectId],
  answer: String,
  userID: [Schema.Types.ObjectId]
},{
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const Answer = mongoose.model('Answer', answerSchema);
module.exports = Answer;
