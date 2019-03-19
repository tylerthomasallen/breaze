const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GiphSchema = new Schema({
  
  favorite_id: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  
  url: {
    type: String,
    required: true
  },

  id: {
    type: String,
    required: true
  },

  title: {
    type: String,
    required: true
  },

  username: {
    type: String,
    required: true
  },

  avatar: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('giphs', GiphSchema);
