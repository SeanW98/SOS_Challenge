var express = require('express');
var router = express.Router();
let museums = require('../controllers/museums');
const checkAuth = require('../middleware/check-auth');

router.get('/', museums.get_museums);

module.exports = router;