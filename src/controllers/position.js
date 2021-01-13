const debug = require('debug')('app:controllers:position');
const PositionService = require('../services/position');

const PositionController = {

	index: async (req, res, next) => {
		debug('executing index of PositionController');
		
		try {
			const updates = await PositionService.update(req);
			res.status(201).send(updates);
		} catch (err) {
			next(err);
		}
	},

};

module.exports = PositionController;