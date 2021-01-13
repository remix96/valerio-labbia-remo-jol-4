const debug = require('debug')('app');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

debug('bootstrapping application');

const config = require('./config');
const logger = require('./config/logger');
const routes = require('./routes');

const Crowding = require('./models/crowding');
const jsonCrowding = require('./start/crowdings.json');
const Map = require('./models/map');
const jsonMap = require('./start/maps.json');

const app = express();

app.use(morgan(config.env.HTTP_LOG_CONFIG, { stream: logger.stream }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(config.env.MONGODBURL, { 
	useNewUrlParser: true,
	useUnifiedTopology: true
}, (err, client) => {
	if (err) return console.error(err)
	console.log('Connected to mongodb')
});


Crowding.find({_id: "5ff4f405391c4684fa13b4d2"}, function (err, results) {
	if (!results.length)
		Crowding.insertMany(jsonCrowding);
})
Map.find({_id: "5ff36f07b6cda80e1c6b9bcc"}, function (err, results) {
	if (!results.length)
		Map.insertMany(jsonMap);
})
  
app.use(routes);

module.exports = app;