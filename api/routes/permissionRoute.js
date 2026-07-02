const { Router } = require('express');
const router = Router();

router
    .get('/permission')
    .post('/permission')
    .get('/permission/:id')
    .put('/permission/:id')
    .delete('/permission/:id');
module.exports = router;