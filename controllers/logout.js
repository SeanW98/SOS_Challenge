exports.logout = function(req, res, next) {
    res
    .clearCookie('token')
    .redirect('/');
}