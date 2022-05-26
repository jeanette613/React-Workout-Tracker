const express = require('express')
const router = express.Router();
const exerciseCtrl = require('../../models/Exercise');
const User = require('../../models/User');

router.get('/', exerciseCtrl.get);

router.put('/:id', exerciseCtrl.put);

router.post('/', exerciseCtrl.create);

router.delete('/:id', exerciseCtrl.remove);

module.exports = router;