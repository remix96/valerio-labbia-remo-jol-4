const debug = require('debug')('app:services:crowding');
const Crowding = require('../models/crowding');
const Userstep = require('../models/userstep');

const CrowdingService = {

	levels: () => {
		debug('executing levels method of CrowdingService');
		
		const queryParam = {};
		queryParam["_id"] = 0;
		return Crowding.find({}, queryParam).exec();
	},
	
	roomlevel: (req) => {
		debug('executing roomlevel method of CrowdingService');
		
		const queryParam = {};
		queryParam[req.query.room] = 1;
		queryParam["_id"] = 0;
		return Crowding.find({}, queryParam).exec();
	},
	
	resetLevels: () => {
		debug('executing resetLevels method of CrowdingService');
		
		Crowding.updateOne({}, {"Sala_Guidobono": 0, "Sala_Feste_gran_Salone" : 0, "Camera_Quattro_Stagioni" : 0, "Camera_di_Madama_Reale" : 0, "Piccolo_guardaroba" : 0, "Gabinetto_Cinese" : 0, "Camera_Nuova" : 0, "Gabinetto_Rotondo" : 0, "Camera_delle_Guardie" : 0, "Veranda_sud" : 0, "Stanza_dei_Fiori" : 0, "Sala_ceramiche" : 0}).exec();
		const queryParam = {};
		queryParam["_id"] = 0;
		Userstep.deleteMany({}).exec();
		return Crowding.find({}, queryParam).exec();
	},

};

module.exports = CrowdingService;
