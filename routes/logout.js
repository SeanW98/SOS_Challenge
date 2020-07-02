var express = require('express');
var router = express.Router();
let logout = require('../controllers/logout');

router.get('/', logout.logout);

module.exports = router;