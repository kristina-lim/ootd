const express = require('express');
const router = express.Router();
const outfitsCtrl = require('../controllers/outfits');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET /outfits (homepage: display all outfits)
router.get('/', outfitsCtrl.index);
//GET /outfits/new (display a form for entering a new post)
router.get('/new', ensureLoggedIn, outfitsCtrl.new);
//GET /outfits/:id
router.get('/:id', outfitsCtrl.show);
//POST /outfits
router.post('/', ensureLoggedIn, outfitsCtrl.create);
//EDIT /outfits/:id/edit
router.get('/:id/edit', ensureLoggedIn, outfitsCtrl.edit);
//UPDATE /outfits/:id
router.put('/:id', ensureLoggedIn, outfitsCtrl.update);

module.exports = router;
