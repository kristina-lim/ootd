const Outfit = require('../models/outfit');

module.exports = {
    index,
    new: newOutfit
}

function newOutfit(req, res) {
    const newOutfit = new Outfit();
    const dt = newOutfit.date;
    let dtDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
    dtDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
    res.render('outfits/new', { dtDate });
}

function index(req, res) {
    Outfit.find({}, function(err, outfits) {
        res.render('outfits/index', { title: 'Homepage', outfits });
    });
}