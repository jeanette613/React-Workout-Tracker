const express = require('express');
const router = express.Router();
const userCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


//POST / CREATE Route
router.post('/', userCtrl.create);

//POST/api/users/login
router.post('/login', userCtrl.login);

//GET /api.users/check-token
router.get('/check-token', ensureLoggedIn, userCtrl.checkToken);

//Delete
router.delete('/:id', userCtrl.remove);

//show
router.get('/:id', userCtrl.show);

module.exports = router;

module.exports = router;