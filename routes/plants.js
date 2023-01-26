const express = require('express');
const router = express.Router();
const plantsCtrl = require('../controllers/plants')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/plants', plantsCtrl.index)
router.get('/new', ensureLoggedIn, plantsCtrl.new)
router.post('/', plantsCtrl.create)
router.get('/:id', ensureLoggedIn, plantsCtrl.show)

module.exports = router;
