const mongoose = require('mongoose');
const Schema = mongoose.Schema;

PositionSchema = new Schema({
	user: {
        type: String,
        required: true
    },
    beacon: {
        type: String,
        required: true
    },
    ts: {
        type: Date,
        default: Date.now
    }
}, {
    versionKey: false
});

module.exports = mongoose.model('Position', PositionSchema);