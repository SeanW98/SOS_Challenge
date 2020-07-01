const mongoose = require('mongoose');

exports.get_signIn = function(req, res, next) {
    res.render('signIn');
    res.redirect('/');
}
