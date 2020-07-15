const jwt = require('JsonWebToken');

exports.get_myAccount = function (req, res) {
    const decoded = jwt.verify(req.cookies.token, 'secret');
    const decodedValue = decoded.firstName + ' ' + decoded.lastName;

    res.render('myAccount', { userName: decodedValue });
};