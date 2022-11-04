const Outfit = require('../models/outfit');

module.exports = {
    create,
    delete: deleteComment
};

function deleteComment(req, res, next) {
    Outfit.findOne({
        'comments._id': req.params.id,
        'comments.user': req.user._id
    }).then(function(outfit) {
        if (!outfit) return res.redirect('/outfits');
        outfit.comments.remove(req.params.id);
        outfit.save().then(function() {
            res.redirect(`/outfits/${outfit._id}`);
        }).catch(function(err) {
            return next(err);
        });
    });
}

function create(req, res) {
    Outfit.findById(req.params.id, function(err, outfit) {
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        outfit.comments.push(req.body);
        outfit.save(function(err) {
            res.redirect(`/outfits/${outfit._id}`);
        });
    });
}