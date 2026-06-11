const { Router } = require('express');
const UserController = require('../controllers/userController');

const router = Router();
router
    .post('/users', UserController.createUser)
    .get('/users', UserController.getUsers)
    .get('/users/:id', UserController.getUserById)
    .put('/users/:id', UserController.updateUser)
    .delete('/users/:id', UserController.deleteUser);

module.exports = router;