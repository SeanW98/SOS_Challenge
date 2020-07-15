const User = require('../models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


exports.get_signUp = function (req, res) {
    res.render('signUp');
};

exports.addUser = function (req, res) {
    if (req.body.password == req.body.passwordCheck) {
        User.find({email: req.body.email})
            .exec()
            .then(user => {
                if (user.length >= 1) {
                    res.send('This email already has an account. Please try to sign up again.');
                } else{bcrypt.hash(req.body.password, 10, function (err, hash)  {
                    if (err) {
                        res.send('500 error');
                    } else {
                        const user = new User({
                            _id: new mongoose.Types.ObjectId(),
                            firstName: req.body.firstName,
                            lastName: req.body.lastName,
                            email: req.body.email,
                            password: hash
                        });
                        user
                            .save()
                            .then( function () {
                                res.redirect('/signIn');
                            }
                            );
                    }
                });}
            });
    } else {
        return res.send('Passwords did not match. Please try to sign up again.');
    }
};