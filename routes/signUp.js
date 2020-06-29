var express = require('express');
var router = express.Router();

let signUp = require('../controllers/signUp')

/* GET home page. */
router.get('/',signUp.get_signUp);

module.exports = router;
