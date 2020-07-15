const express = require('express');
const router = express.Router();
const myAccount = require('../controllers/myAccount');
const checkAuth = require('../middleware/check-auth');

router.get('/', checkAuth,  myAccount.get_myAccount);

module.exports = router;