const mongoose = require('mongoose');
const Business = require('../models/business');

exports.get_others = function (req, res, next) {
    Business.find({businessType: 'others'})
    .select('businessName')
    .exec()
    .then(doc =>{
        res.render('others', { others: doc});
    });
}

exports.showOther = function (req, res, next) {
    Business.findOne({_id: req.params.otherId})
    .exec()
    .then(doc=>{
    res.render('businessPageTemplate',{business : doc});
    });
}