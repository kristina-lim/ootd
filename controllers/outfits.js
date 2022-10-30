const Outfit = require('../models/outfit');

module.exports = {
    index,
    new: newOutfit,
    create,
    show
}

function show(req, res) {
    Outfit.findById(req.params.id, function(err, outfit) {
        res.render('outfits/show', {
            title: 'Outfit Details',
            outfit
        });
    });
}

function create(req, res) {
    const outfit = new Outfit(req.body);
    outfit.save(function(err) {
        if (err) return res.redirect('/outfits/new');
        res.redirect('/outfits');
    });
}

function newOutfit(req, res, title) {
    const newOutfit = new Outfit();
    const dt = newOutfit.date;
    let dtDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
    dtDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
    res.render('outfits/new', {title, dtDate});
}

function index(req, res) {
    Outfit.find({}, function(err, outfits) {
        res.render('outfits/index', { title: 'My Fits', outfits });
    });
}