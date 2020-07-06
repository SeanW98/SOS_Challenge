
exports.get_myAccount = function (req, res, next) {
    let token = req.cookies.token;
    if (token == undefined){
        res.redirect('/signIn');
    }else{
        res.render('myAccount');
    }
}