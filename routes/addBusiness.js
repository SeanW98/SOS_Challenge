const express = require('express');
const router = express.Router();
const addBusiness = require('../controllers/addBusiness');

router.get('/', addBusiness.get_addBusiness);
router.post('/', addBusiness.addBusiness);

module.exports = router;