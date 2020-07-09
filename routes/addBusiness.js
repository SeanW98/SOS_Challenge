var express = require('express');
var router = express.Router();
let addBusiness = require('../controllers/addBusiness');

router.get('/', addBusiness.get_addBusiness);
router.post('/', addBusiness.addBusiness);

module.exports = router;