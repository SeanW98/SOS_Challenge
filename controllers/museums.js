const mongoose = require('mongoose');
const Business = require('../models/business');

exports.get_museums = function (req, res, next) {
    Business.find({businessType: 'museums'})
    .select('businessName')
    .exec()
    .then(doc =>{
        res.render('museums', { museums: doc});
    });
}

exports.showMuseum = function (req, res, next) {
    Business.findOne({_id: req.params.museumId})
    .exec()
    .then(doc=>{
    res.render('businessPageTemplate',{business : doc});
    });
}