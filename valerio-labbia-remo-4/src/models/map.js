const mongoose = require('mongoose');
const Schema = mongoose.Schema;

MapSchema = new Schema({
	1: {
        type: String,
        required: true
    },
    2: {
        type: String,
        required: true
    },
    3: {
        type: String,
        required: true
    },
	4: {
        type: String,
        required: true
    },
	5: {
        type: String,
        required: true
    },
	6: {
        type: String,
        required: true
    },
	7: {
        type: String,
        required: true
    },
	8: {
        type: String,
        required: true
    },
	9: {
        type: String,
        required: true
    },
	10: {
        type: String,
        required: true
    },
	11: {
        type: String,
        required: true
    },
	12: {
        type: String,
        required: true
    }
}, {
    versionKey: false
});

module.exports = mongoose.model('Map', MapSchema);