const express = require('express');
const path = require('path');
const router = express.Router();
const routeController = require(APP_PATH + '/app_server/controllers/applicationControllers/index.controller');

router.use('/*', routeController);

module.exports = router;