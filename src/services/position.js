const debug = require('debug')('app:services:position');
const Position = require('../models/position');
const Map = require('../models/map');
const Crowding = require('../models/crowding');
const Userstep = require('../models/userstep');

const PositionService = {

	update: (req) => {
		debug('executing update method of PositionService');
		
		const beaconNumber = parseInt(req.body.beacon);
		if (isNaN(req.body.beacon)) {
			console.log('beacon must be a number')
		} else if (beaconNumber >=1 && beaconNumber <= 12) {
			Map.distinct(req.body.beacon).exec().then(function(roomname) {
				Userstep.find({user: req.body.user}, function (err, results) {
					if (!results.length) {
						Userstep.create({
						user : req.body.user,
						position : roomname.toString()
						});
						const queryParam = {};
						queryParam[roomname] = 1;
						Crowding.updateOne({$inc : queryParam}).exec();
					} else {
						Userstep.distinct('position', { 'user': req.body.user }).exec().then(function(savedPosition) {
							if (savedPosition.toString() != roomname.toString()) {
								const queryParamDec = {};
								queryParamDec[savedPosition] = -1;
								Crowding.updateOne({$inc : queryParamDec}).exec();
								Userstep.updateOne({user: req.body.user}, {position : roomname.toString()}).exec();
								const queryParamIncNew = {};
								queryParamIncNew[roomname] = 1;
								Crowding.updateOne({$inc : queryParamIncNew}).exec();
							}
						})
					}
				})
			})
			return Position.create({
				user : req.body.user,
				beacon : req.body.beacon,
				ts : req.body.ts
			}); 
		}
	},

};

module.exports = PositionService;
