const express = require('express');
const router = express.Router();
const routeController = require(APP_PATH + '/app_server/controllers/apiControllers/index.controller');
const usersRoutes = require('./users');

router.use('/users', usersRoutes);

router.use('/*', routeController);

module.exports = router;