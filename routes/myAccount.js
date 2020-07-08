var express = require('express');
var router = express.Router();
let myAccount = require('../controllers/myAccount');
const checkAuth = require('../middleware/check-auth');

router.get('/', checkAuth,  myAccount.get_myAccount);

module.exports = router;