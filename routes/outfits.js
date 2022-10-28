const express = require('express');
const router = express.Router();
const outfitsCtrl = require('../controllers/outfits');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET /outfits (display all other users outfits)
router.get('/', outfitsCtrl.index);

module.exports = router;
