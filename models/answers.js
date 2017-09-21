const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const answerSchema = new Schema({
  questionID: [Schema.Types.ObjectId],
  answerA: Boolean,
  answerB: Boolean,
  answerC: Boolean,
  answerD: Boolean,
  userID: [Schema.Types.ObjectId]
},{
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const Answer = mongoose.model('Answer', answerSchema);
module.exports = Answer;
