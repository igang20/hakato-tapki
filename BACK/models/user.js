const mongoose = require('mongoose');
const vacancyModel = require('./vacancy');

const userSchema = new mongoose.Schema({
    username: { 
        type: String,
        required: true, 
    },
    password: {
        type: String,
        required: true, 
    },
    email: {
        type: String,
        required: true, 
    },
    favorites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: vacancyModel,
      }],
});

module.exports = mongoose.model('userReg', userSchema);