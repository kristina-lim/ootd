const Outfit = require('../models/outfit');

module.exports = {
    index
}

function index(req, res) {
    Outfit.find({}, function(err, outfits) {
        res.render('outfits/index', { title: 'Homepage', outfits });
    });
}