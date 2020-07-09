var express = require('express');
var router = express.Router();
let hotels = require('../controllers/hotels');
const checkAuth = require('../middleware/check-auth');

//routing was learned from https://www.youtube.com/watch?v=G8uL0lFFoN0
router.get('/', hotels.get_hotels);
router.get('/:hotelId', hotels.showHotel);


module.exports = router;