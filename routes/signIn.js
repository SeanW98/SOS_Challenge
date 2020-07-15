const express = require('express');
const router = express.Router();

const signIn = require('../controllers/signIn');

router.get('/', signIn.get_signIn);
router.post('/', signIn.signIn);

module.exports = router;