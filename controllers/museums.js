const mongoose = require('mongoose');
const Business = require('../models/business');

exports.get_museums = function (req, res, next) {
    Business.find({businessType: 'museums'})
    .select('businessName')
    .exec()
    .then(doc =>{
        //doc.length
        //doc[0],businessName
        res.render('museums', { museums: doc});
    });
}