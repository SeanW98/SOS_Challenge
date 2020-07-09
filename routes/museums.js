var express = require('express');
var router = express.Router();
let museums = require('../controllers/museums');
const checkAuth = require('../middleware/check-auth');

//routing was learned from https://www.youtube.com/watch?v=G8uL0lFFoN0
router.get('/', museums.get_museums);
router.get('/:museumId', museums.showMuseum);


module.exports = router;