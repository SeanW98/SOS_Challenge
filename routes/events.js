var express = require('express');
var router = express.Router();
let events = require('../controllers/events');
const checkAuth = require('../middleware/check-auth');

//routing was learned from https://www.youtube.com/watch?v=G8uL0lFFoN0
router.get('/', events.get_events);
router.get('/:eventId', events.showEvent);


module.exports = router;