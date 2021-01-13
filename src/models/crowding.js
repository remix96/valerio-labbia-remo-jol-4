const mongoose = require('mongoose');
const Schema = mongoose.Schema;

CrowdingSchema = new Schema({
	Sala_Guidobono: {
        type: Number,
        default: 0
    },
	Sala_Feste_gran_Salone: {
        type: Number,
        default: 0
    },
	Camera_Quattro_Stagioni: {
        type: Number,
        default: 0
    },
	Camera_di_Madama_Reale: {
        type: Number,
        default: 0
    },
	Piccolo_guardaroba: {
        type: Number,
        default: 0
    },
	Gabinetto_Cinese: {
        type: Number,
        default: 0
    },
	Camera_Nuova: {
        type: Number,
        default: 0
    },
	Gabinetto_Rotondo: {
        type: Number,
        default: 0
    },
	Camera_delle_Guardie: {
        type: Number,
        default: 0
    },
	Veranda_sud: {
        type: Number,
        default: 0
    },
	Stanza_dei_Fiori: {
        type: Number,
        default: 0
    },
	Sala_ceramiche: {
        type: Number,
        default: 0
    }
}, {
	autoCreate: true,
    versionKey: false
});

module.exports = mongoose.model('Crowding', CrowdingSchema);