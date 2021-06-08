const mongoose = require('mongoose');

const billpaySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },

  billAmount: {
    type: String,
    required: true,
    min: 4,
    max: 255,
  },

  description: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },

  date: {
    type: Date,
    default: Date.now,
  },

  
});

module.exports = Billpay = mongoose.model('Billpay', billpaySchema);
