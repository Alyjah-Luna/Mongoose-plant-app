const express = require('express');
const router = express.Router();
const plantsCtrl = require('../controllers/plants')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/', plantsCtrl.index)
router.get('/new', ensureLoggedIn, plantsCtrl.new)
router.get('/:id', plantsCtrl.show)
router.post('/', ensureLoggedIn, plantsCtrl.create)
router.delete('/:id', ensureLoggedIn, plantsCtrl.delete)
router.get('/:id/edit', ensureLoggedIn, plantsCtrl.edit)
router.put('/:id', ensureLoggedIn, plantsCtrl.update)


module.exports = router;
