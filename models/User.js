const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  favorites: {
    type: [Object],
    default: []
  }
});

module.exports = User = mongoose.model('users', UserSchema);
