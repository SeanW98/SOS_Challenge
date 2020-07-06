var express = require('express');
var router = express.Router();
let myAccount = require('../controllers/myAccount');

router.get('/', myAccount.get_myAccount);

module.exports = router;