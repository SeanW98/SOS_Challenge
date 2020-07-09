var express = require('express');
var router = express.Router();
let others = require('../controllers/others');
const checkAuth = require('../middleware/check-auth');

//routing was learned from https://www.youtube.com/watch?v=G8uL0lFFoN0
router.get('/', others.get_others);
router.get('/:otherId', others.showOther);


module.exports = router;