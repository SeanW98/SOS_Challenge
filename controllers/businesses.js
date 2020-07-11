const mongoose = require('mongoose');
const Business = require('../models/business');

exports.showMuseums = function (req, res, next) {
    Business.find({businessType: 'Museums'})
    .select('businessName')
    .exec()
    .then(doc =>{
        res.render('businesses', { businesses: doc, type:"Museums"});
    });
}

exports.showHotels = function (req, res, next) {
    Business.find({businessType: 'Hotels'})
    .select('businessName')
    .exec()
    .then(doc =>{
        res.render('businesses', { businesses: doc, type:"Hotels"});
    });
}

exports.showEvents = function (req, res, next) {
    Business.find({businessType: 'Events'})
    .select('businessName')
    .exec()
    .then(doc =>{
        res.render('businesses', { businesses: doc, type:"Events"});
    });
}

exports.showOthers = function (req, res, next) {
    Business.find({businessType: 'Others'})
    .select('businessName')
    .exec()
    .then(doc =>{
        res.render('businesses', { businesses: doc, type:"Others"});
    });
}

exports.showOneBusiness = function (req, res, next) {
    Business.findOne({_id: req.params.businessId})
    .exec()
    .then(doc=>{
    res.render('singleBusiness',{business : doc});
    });
}