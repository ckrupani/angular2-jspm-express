const express = require('express');
const router = express.Router();
const routeController = require(APP_PATH + '/app_server/controllers/apiControllers/users.controller');

router.get('/', routeController.getAll);
router.get('/:id', routeController.getById);
router.post('/:id', routeController.post);
router.put('/:id', routeController.put);
router.delete('/:id', routeController.delete);

module.exports = router;