
exports.get_landing = function(req, res, next) {
    let token = req.cookies.token;
    if (token==undefined){
        res.redirect('/signIn')
    }else{
        res.render('landing');
    }
  }

  //have 3 diffrent ladning functions. 
  //one that tests if a token is logged in
  //two diffrent redirect loggin pages

