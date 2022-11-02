const Outfit = require('../models/outfit');

module.exports = {
    index,
    new: newOutfit,
    create,
    show,
    edit,
    update,
    delete: deleteOutfit
}

function deleteOutfit(req, res) {
    Outfit.findOneAndDelete({
       _id: req.params.id
    }, function(err) {    
        res.redirect('/outfits');
        });
}

function update(req, res) {
    Outfit.findById(req.params.id, function(err, outfit) {
        outfit.title = req.body.title;
        outfit.image = req.body.image;
        outfit.agenda = req.body.agenda;
        outfit.description = req.body.description;
        outfit.outerwear = req.body.outerwear;
        outfit.top = req.body.top;
        outfit.womBottom = req.body.womBottom;
        outfit.manBottom = req.body.manBottom;
        outfit.save(function(err) {
            console.log(err)
            if (err) return res.redirect('/outfits/new');
            res.redirect(`/outfits/${outfit._id}`);
        });
    });
}

function edit(req, res) {
    Outfit.findById(req.params.id, function(err, outfit) {
        res.render(`outfits/edit`, {
            title: outfit.title,
            outfit
        });
    });
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
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    const outfit = new Outfit(req.body);
    console.log(req.body.filename);
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
        res.render('outfits/index', { title: 'Fits', outfits });
    });
}