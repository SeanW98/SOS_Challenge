const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    businessId: {type: String, required: true},
    userId: {type: String, require: true},
    userName: {type: String, require: true},
    comment: {type: String, require: true},
    rating: {type: Number, require: true},
});

module.exports = mongoose.model('Review',reviewSchema);