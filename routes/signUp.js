const express = require('express');
const router = express.Router();

const signUp = require('../controllers/signUp');

router.get('/',signUp.get_signUp);
router.post('/',signUp.addUser);

module.exports = router;
