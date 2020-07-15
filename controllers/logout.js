exports.logout = function(req, res) {
    res
        .clearCookie('token')
        .redirect('/');
};