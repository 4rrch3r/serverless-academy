const mongoose = require('mongoose');
const toJSON = require('../utils/toJson');
const Schema = mongoose.Schema;

const linkSchema = new Schema({
  longLink: {
    type: String,
    required: [true, 'Long link is required'],
    unique: true,
  },
  shortLink:{
    type: String,
    required: [true, 'Short link is required'],
    unique: true,
  }
});

toJSON(linkSchema);

module.exports = mongoose.model('links', linkSchema);
