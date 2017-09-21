const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const answerSchema = new Schema({
  questionID: [Schema.Types.ObjectId],
  answerA: {type:Boolean, default:false},
  answerB: {type:Boolean, default:false},
  answerC: {type:Boolean, default:false},
  answerD: {type:Boolean, default:false},
  userID: [Schema.Types.ObjectId]
},{
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const Answer = mongoose.model('Answer', answerSchema);
module.exports = Answer;
