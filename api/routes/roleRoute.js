const { Router } = require('express')
const RoleController = require('../controllers/roleController')

const router = Router()

router
    .post('/role', RoleController.register)
    .get('/role', RoleController.getAll)
    .get('/role/:id', RoleController.getById)
    .put('/role/:id', RoleController.update)
    .delete('/role/:id', RoleController.delete)

module.exports = router