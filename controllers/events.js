const mongoose = require('mongoose');
const Business = require('../models/business');

exports.get_events = function (req, res, next) {
    Business.find({businessType: 'events'})
    .select('businessName')
    .exec()
    .then(doc =>{
        res.render('events', { events: doc});
    });
}

exports.showEvent = function (req, res, next) {
    Business.findOne({_id: req.params.eventId})
    .exec()
    .then(doc=>{
    res.render('businessPageTemplate',{business : doc});
    });
}