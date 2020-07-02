const mongoose = require('mongoose');
const User = require('../models/user');
const bcrypt = require('bcrypt');

exports.get_signIn = function(req, res, next) {
    res.render('signIn');
}

exports.signIn = function(req, res, next) {
        User.find({email: req.body.email})
        .exec()
        .then(user => {
            if (user.length < 1) {
                res.send("Error: password or email not correct. Try again")
            }
            bcrypt.compare(req.body.password, user[0].password, (err, result) =>{
                if (err) {
                    res.send("Error, password or email not correct. Try again")
                }
                if (result) {
                    res.redirect('/');
                }else{
                    res.send("Error, password or email not correct. Try again")
                }
            });
        })
        .catch(err =>{
            res.respond("500 error")
        });
    };
