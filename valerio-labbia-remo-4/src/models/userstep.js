const mongoose = require('mongoose');
const Schema = mongoose.Schema;

UserstepSchema = new Schema({
	user: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    }
}, {
	autoCreate: true,
    versionKey: false
});

module.exports = mongoose.model('Userstep', UserstepSchema);