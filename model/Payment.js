const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },

    discription: {
        type: Array,
        default: []
    },

    total: {
        type: Array,
        default: []
    },

  date: {
    type: Date,
    default:Date.now
  }

  
});

module.exports = Payment = mongoose.model('Payment', paymentSchema);