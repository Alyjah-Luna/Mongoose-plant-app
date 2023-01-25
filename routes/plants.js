const express = require('express');
const router = express.Router();
const plantsCtrl = require('../controllers/plants')

// router.get('/', plantsCtrl.index)
router.get('/new', plantsCtrl.new)
router.post('/', plantsCtrl.create)
router.get('/:id', plantsCtrl.show)


module.exports = router;