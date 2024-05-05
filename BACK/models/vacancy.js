const mongoose = require('mongoose');

const vacancySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    datePosted: {
        type: String,
        required: true
    },
    requirements: {
        type: Array,
        required: true
    },
    img: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('vacancy', vacancySchema);