var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Homepage' });
});

router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email']
  }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/outfits',
    failureRedirect: '/outfits'
  }
));

router.get('/logout', function(req, res) {
  req.logout(function() {
    res.redirect('/outfits');
  });
});

module.exports = router;
