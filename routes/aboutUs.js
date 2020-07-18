const express = require('express');
const router = express.Router();
const aboutUs = require('../controllers/aboutUs');

router.get('/', aboutUs.get_aboutUs);
router.post('/', aboutUs.aboutUs);

module.exports = router;