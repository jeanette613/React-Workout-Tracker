const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const exerciseSchema = require('./Exercises');

const exerciseEntrySchema = new Schema({
    date: {
        type: Number,
        trim: true,
        required: true,
        minlength: 6
    },
    exercise: exerciseSchema

});

module.exports = mongoose.model('Entry', exerciseEntrySchema);