const Outfit = require('../models/outfit');

module.exports = {
    index,
    new: newOutfit,
    create,
    show,
    edit,
    // update
}

// function update(req, res) {
//     Outfit.findOneAndUpdate({
//         _id: req.params.id,
//     },
//     {
//         $set: {
//             title: req.body.title,
//             agenda: req.body.agenda,
//             description: req.body.description,
//             mood: req.body.mood,
//             date: req.body.date,
//             outerwear: req.body.outerwear,
//             top: req.body.top,
//             womBottom: req.body.womBottom,
//             manBottom: req.body.manBottom
//         }
//     },
//     {
//         new: true
//     }, function(err, outfit) {
//         if (!err) {
//             res.render('/outfits/edit', {
//                 title: outfit.title,
//                 agenda: outfit.agenda,
//                 description: outfit.description,
//                 mood: outfit.mood,
//                 date: outfit.date,
//                 outerwear: outfit.outerwear,
//                 top: outfit.top,
//                 womBottom: outfit.womBottom,
//                 manBottom: outfit.manBottom
//             });
//         }
//     });
// }

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