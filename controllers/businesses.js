const mongoose = require('mongoose');
const Business = require('../models/business');
const Review = require('../models/review');
const jwt = require('JsonWebToken');

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
    .then(foundBusiness=>{
        Review.find({businessId: req.params.businessId})
        .exec()
        .then(foundReviews=>{
            res.render('singleBusiness', { business: foundBusiness , reviews: foundReviews})
        });
    });
}

exports.submitReview = function (req, res, next) {
    let decoded = jwt.verify(req.cookies.token, 'secret');
    const review = new Review({
        _id: new mongoose.Types.ObjectId(),
        businessId: req.body.businessId,
        userId: decoded._id,
        userName: decoded.firstName + " " + decoded.lastName,
        comment: req.body.review,
        rating: "5",

    });
    review
    .save()
    .then( function () {
    res.redirect('/');
    }
);
}