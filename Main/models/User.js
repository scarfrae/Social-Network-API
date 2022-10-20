//think this is slightly wrong
const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      max_length: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      //got from https://mongoosejs.com/docs/validation.html
      validate: {
        validator: () => Promise.resolve(false),
        message: 'Email validation failed'
      },
      max_length: 50,
    },
    thoughts: [
      {
        type: Schema.Types._Id,
        ref: 'Thought',
      },
    ],
    friends: [
      {
        type: Schema.Types._Id,
        ref: 'User',
      },
    ],
  },
  {
    toJSON: {
      getters: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `friendCount` that retrieves the length of the user's friends array field on query.
userSchema
//don't know what to do
  .virtual('friendCount')
  // // Getter
  // .get(function () {
  //   return `${this.first} ${this.last}`;
  // })
  // // Setter to set the first and last name
  // .set(function (v) {
  //   const first = v.split(' ')[0];
  //   const last = v.split(' ')[1];
  //   this.set({ first, last });
  // });

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;
