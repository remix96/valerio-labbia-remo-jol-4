const debug = require('debug')('app');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

debug('bootstrapping application');

const config = require('./config');
const logger = require('./config/logger');
const routes = require('./routes');

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
  
app.use(routes);

module.exports = app;