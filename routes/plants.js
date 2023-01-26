const express = require('express');
const router = express.Router();
const plantsCtrl = require('../controllers/plants')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/', plantsCtrl.index)
router.get('/new', ensureLoggedIn, plantsCtrl.new)
router.get('/:id', ensureLoggedIn, plantsCtrl.show)
router.post('/', ensureLoggedIn, plantsCtrl.create)
router.put('/:id', ensureLoggedIn, plantsCtrl.update)
router.delete('/:id', ensureLoggedIn, plantsCtrl.delete)

module.exports = router;
