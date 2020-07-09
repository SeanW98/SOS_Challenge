const jwt = require('JsonWebToken');

exports.get_myAccount = function (req, res, next) {
    var decoded = jwt.verify(req.cookies.token, 'secret');
    var decodedValue = decoded.firstName + " " + decoded.lastName;

        res.render('myAccount', { userName: decodedValue });
}