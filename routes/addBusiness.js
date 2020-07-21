const express = require('express');
const router = express.Router();
const addBusiness = require('../controllers/addBusiness');

//Instead of adding a business, this in the future, would link
//to an admin page that can be reviewed before being added to 
//the collections of bsuinesses

router.get('/', addBusiness.get_addBusiness);
router.post('/', addBusiness.addBusiness);

module.exports = router;