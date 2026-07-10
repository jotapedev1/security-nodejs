const { Router } = require('express');
const PermissionController = require('../controllers/permissionController');
const authenticated = require('../middleware/authenticated')
const router = Router();

router
    .post('/permission', authenticated, PermissionController.register)
    .get('/permission', authenticated, PermissionController.getAll)
    .get('/permission/:id', authenticated, PermissionController.getById)
    .put('/permission/:id', authenticated, PermissionController.update)
    .delete('/permission/:id', authenticated, PermissionController.delete);

module.exports = router;