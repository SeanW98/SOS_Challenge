var express = require('express');
var router = express.Router();

let signIn = require('../controllers/signIn');
const { json } = require('express');

router.get('/',signIn.get_signIn);

router.post('/login', (req, res, next) => {
    User.find({email: req.body.email})
    .exec()
    .then(user => {
        if (user.length < 1) {
            return res.status(401).json({
                message: 'Auth failed'
            });
        }
        bcrypt.compare(req.body.password, user[0].password, (err, result) =>{
            if (err) {
                return res.status(401).json({
                    message: 'Auth failed'
                })
            }
            if (result) {
                return res.status(200).json({
                    message: 'Auth successful'
                });
            }
            res.status(401).json({
                message: 'Auth failed'
            });
        });
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

module.exports = router;