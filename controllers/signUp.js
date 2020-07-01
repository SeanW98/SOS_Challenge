const User = require('../models/user');
const mongoose = require('mongoose');


exports.get_signUp = function(req, res, next) {
    res.render('signUp');
}

exports.addUser = function(req, res, next) {

    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        email: req.body.email,
        password: req.body.password
    });
    user.save();
    res.redirect('/');
}