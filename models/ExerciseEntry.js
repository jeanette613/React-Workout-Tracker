const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const exerciseSchema = require('./Exercise');

const exerciseEntrySchema = new Schema({
    date: {
        type: Number,
        trim: true,
        required: true,
        minlength: 6
    },
    exercise: exerciseSchema
    // Do I pull from mongoose (like in collab project or just call Schema like cafe? [{ type: mongoose.Schema.Types.ObjectId, ref: 'Exercise' }]

});

module.exports = mongoose.model('Entry', exerciseEntrySchema);