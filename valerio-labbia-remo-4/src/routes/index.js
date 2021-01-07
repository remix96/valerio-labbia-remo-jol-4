const debug = require('debug')('app:routes:index');
const express = require('express');

debug('configuring routes');

const ErrorsMiddleware = require('../middlewares/errors');
const HealthyCheckController = require('../controllers/healthyCheck');
const PositionController = require('../controllers/position');
const CrowdingController = require('../controllers/crowding');

const router = express.Router();

router.get('/', HealthyCheckController.index);

router.get('/reset', CrowdingController.reset);

router.post('/position', PositionController.index);

router.get('/crowding', CrowdingController.index);

// catch 404 and forward to error handler
router.use(ErrorsMiddleware.notFound);

// generic error handler
router.use(ErrorsMiddleware.generic);

module.exports = router;
