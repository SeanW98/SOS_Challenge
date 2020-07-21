const mongoose = require('mongoose');
const Business = require('../models/business');
const Review = require('../models/review');
const jwt = require('JsonWebToken');

exports.showMuseums = function (req, res) {
    Business.find({businessType: 'Museums'})
        .select('businessName')
        .exec()
        .then(doc =>{
            res.render('businesses', { businesses: doc, type:'Museums'});
        });
};

exports.showHotels = function (req, res) {
    Business.find({businessType: 'Hotels'})
        .select('businessName')
        .exec()
        .then(doc =>{
            res.render('businesses', { businesses: doc, type:'Hotels'});
        });
};

exports.showEvents = function (req, res) {
    Business.find({businessType: 'Events'})
        .select('businessName')
        .exec()
        .then(doc =>{
            res.render('businesses', { businesses: doc, type:'Events'});
        });
};

exports.showOthers = function (req, res) {
    Business.find({businessType: 'Others'})
        .select('businessName')
        .exec()
        .then(doc =>{
            res.render('businesses', { businesses: doc, type:'Others'});
        });
};

exports.showOneBusiness = function (req, res) {
    Business.findOne({_id: req.params.businessId})
        .exec()
        .then(foundBusiness=>{
            Review.find({businessId: req.params.businessId})
                .exec()
                .then(foundReviews=>{
                    //This is where the average total for a business is currently calculated
                    let total = 0;
                    for (var review in foundReviews) { total += foundReviews[review].rating; }
                    avgTotal = (total / Object.keys(foundReviews).length).toFixed(1);
                    res.render('singleBusiness', { business: foundBusiness , reviews: foundReviews, avgTotal});
                });
        });
};

exports.submitReview = function (req, res) {
    const decoded = jwt.verify(req.cookies.token, 'secret');
    const review = new Review({
        _id: new mongoose.Types.ObjectId(),
        businessId: req.body.businessId,
        userId: decoded._id,
        userName: decoded.firstName + ' ' + decoded.lastName,
        comment: req.body.review,
        rating: req.body.rating

    });
    review
        .save()
        .then( function () {
            console.log(req.body.businessType);
            res.redirect('/businesses/' + req.body.businessType + '/' + req.body.businessId );
        }
        );
};