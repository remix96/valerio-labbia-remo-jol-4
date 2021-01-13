const debug = require('debug')('app:controllers:crowding');
const CrowdingService = require('../services/crowding');

const CrowdingController = {

	index: async (req, res, next) => {
		debug('executing index of CrowdingController');
		
		try {
			let level = 0;
			if (!req.query.room)
				level = await CrowdingService.levels();
			else 
				level = await CrowdingService.roomlevel(req);
			res.status(200).send(level);
		} catch (err) {
			next(err);
		}
	},
	
	reset: async (req, res, next) => {
		debug('executing reset of CrowdingController');
		
		try {
			const clean = await CrowdingService.resetLevels();
			res.status(200).send('Crowding levels successful resetted:\n' + clean);
		} catch (err) {
			next(err);
		}
	},

};

module.exports = CrowdingController;