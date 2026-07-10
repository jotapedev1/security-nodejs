const { Router } = require('express')
const RoleController = require('../controllers/roleController')
const authenticated = require('../middleware/authenticated')

const router = Router()

router
    .post('/role', authenticated, RoleController.register)
    .get('/role', authenticated, RoleController.getAll)
    .get('/role/:id', authenticated, RoleController.getById)
    .put('/role/:id', authenticated, RoleController.update)
    .delete('/role/:id', authenticated, RoleController.delete)

module.exports = router