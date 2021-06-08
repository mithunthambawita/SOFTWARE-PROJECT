const mongoose = require('mongoose');

const feedSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 4,
    max: 255
  },

  email: { 
    type: String,
    required: true,
    min: 6,
    max: 255,
    unique: true
},

  feedback: {
    type: String,
    required: true,
    min: 4,
    max: 255
  },

  selectedOption: {
    type: String,
    required: true,
    min: 2,
    max: 255
  },

 

  // avatar:{
  //   type: String
  // },

  date: {
    type: Date,
    default:Date.now
  }

  
});

module.exports = mongoose.model('Feedback', feedSchema);