const mongoose = require('mongoose');

const lauchesSchema = new mongoose.Schema({
    flightNumber: {
        type: Number,
        require: true,
    },
    launchDate: {
        type: Date,
        require: true,
    },
    mission: {
        type: String,
        require: true,
    },
    rocket: {
        type: String,
        require: true,
    },
    target: {
        type: String,
    },
    customers: [String],
    upcoming: {
        type: Boolean,
        require: true,
    },
    success: {
        type: Boolean,
        require: true,
    },
});


module.exports = mongoose.model('Launch', lauchesSchema);