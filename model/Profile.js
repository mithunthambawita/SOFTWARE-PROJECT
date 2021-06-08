const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },

    distric: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },

    city:{
        type: String,
        required: true,
        min: 6,
        max: 255
    },

    mobileNo: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },

    nationalId: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },

    // image: {
    //     type: String,
    //     required: true,
    // },

    date: {
        type: Date,
        default: Date.now 
    }
});

module.exports = Profile =  mongoose.model('Profile', profileSchema);