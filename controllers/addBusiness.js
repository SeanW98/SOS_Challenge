const Business = require('../models/business');
const mongoose = require('mongoose');


exports.get_addBusiness = function(req, res, next) {
    res.render('addBusiness');
}

exports.addBusiness = function (req, res, next) {
    const business = new Business({
        _id: new mongoose.Types.ObjectId(),
        businessName: req.body.businessName,
        phoneNumber: req.body.phoneNumber,
        businessAddress: req.body.businessAddress,
        businessType: req.body.businessType,
        businessIntro:req.body.businessIntro,
        covidPrevention: req.body.covidPrevention,
        businessWebsite: req.body.businessWebsite
    });
    business
    .save()
    .then( function () {
        res.redirect('/');
        }
    );
}