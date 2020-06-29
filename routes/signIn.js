var express = require('express');
var router = express.Router();

let signIn = require('../controllers/signIn')

router.get('/',signIn.get_signIn);

module.exports = router;