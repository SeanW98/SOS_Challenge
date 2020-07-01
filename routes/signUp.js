var express = require('express');
var router = express.Router();

let signUp = require('../controllers/signUp');

router.get('/',signUp.get_signUp);
router.post('/',signUp.addUser);

module.exports = router;
