const mongoose = require('mongoose');
const Business = require('../models/business');

exports.get_hotels = function (req, res, next) {
    Business.find({businessType: 'hotels'})
    .select('businessName')
    .exec()
    .then(doc =>{
        res.render('hotels', { hotels: doc});
    });
}

exports.showHotel = function (req, res, next) {
    Business.findOne({_id: req.params.hotelId})
    .exec()
    .then(doc=>{
    res.render('businessPageTemplate',{business : doc});
    });
}