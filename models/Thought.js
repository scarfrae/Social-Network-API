//think this is slightly wrong
const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const formatTime = require('../utils/formatTime');

// Schema to create Student model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      //need to work on formatTime function in utils
      get: formatTime,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  });



const Thought = model('thought', thoughtSchema);

module.exports = Thought;