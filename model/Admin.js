const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    min: 4,
    max: 255
  },

  lastName: { 
    type: String,
    required: true,
    min: 4,
    max: 255
},

  mobileNumber: {
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

  userName: {
    type: String,
    required: true,
    min: 4,
    max: 255
  },

  passWord: {
    type: String,
    required: true,
    min: 8,
    max: 1024
  },

  confirmPassWord: {
    type: String,
    required: true,
    min: 8,
    max: 1024
  },

  avatar:{
    type: String
  },

  date: {
    type: Date,
    default:Date.now
  },
  
  role: {
    type: String,
    default: 'admin',
  },

  
});

module.exports = Admin = mongoose.model('user', adminSchema);