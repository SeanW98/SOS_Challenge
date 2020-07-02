var express = require('express');
var router = express.Router();
const checkAuth = require('../middleware/check-auth');
let landing = require('../controllers/landing');

/* GET home page. */
router.get('/', checkAuth, landing.get_landing);

module.exports = router;