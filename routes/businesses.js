const express = require('express');
const router = express.Router();
const businesses = require('../controllers/businesses');
const checkAuth = require('../middleware/check-auth');

//routing was learned from https://www.youtube.com/watch?v=G8uL0lFFoN0
router.get('/museums', businesses.showMuseums);
router.get('/hotels', businesses.showHotels);
router.get('/events', businesses.showEvents);
router.get('/others', businesses.showOthers);

router.get('/museums/:businessId', businesses.showOneBusiness);
router.get('/hotels/:businessId', businesses.showOneBusiness);
router.get('/events/:businessId', businesses.showOneBusiness);
router.get('/others/:businessId', businesses.showOneBusiness);

router.post('/submitReview',checkAuth, businesses.submitReview);

module.exports = router;