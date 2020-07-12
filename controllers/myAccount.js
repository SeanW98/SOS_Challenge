const jwt = require('JsonWebToken');

exports.get_myAccount = function (req, res, next) {
    let decoded = jwt.verify(req.cookies.token, 'secret');
    let decodedValue = decoded.firstName + " " + decoded.lastName;

        res.render('myAccount', { userName: decodedValue });
}