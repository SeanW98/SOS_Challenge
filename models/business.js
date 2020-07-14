const mongoose = require('mongoose');

const businessSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    businessName: {type: String, required: true},
    phoneNumber: {type: String, required: true},
    businessAddress: {type: String, required: true},
    businessType: {type: String, required: true},
    businessIntro: {type: String, required: true},
    covidPrevention: {type: String, require: true},
    businessHours: {type: String, require: true},
    businessWebsite: {type: String, require: true}
    //Later, we would like to add the ability for a business to add a photo
});

module.exports = mongoose.model('Business',businessSchema);