const mongoose = require('mongoose');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('JsonWebToken');

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
                    const token = jwt.sign({
                        userId: user[0]._id,
                        firstName: user[0].firstName,
                        lastName: user[0].lastName,
                    }, 'secret',
                        {
                            expiresIn: "1h"
                        }
                    );
                    res.cookie('token',token)
                    .redirect('/');
                }else{
                    res.send("Error, password or email not correct. Try again")
                }
            });
        })
        .catch(err =>{
            res.respond("500 error")
        });
    };
