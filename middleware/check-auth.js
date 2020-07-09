const jwt = require('JsonWebToken');

module.exports = (req,res,next) => {
    try{
        let token = req.cookies.token;
        jwt.verify(token, 'secret');
        next();
    }catch (error){
        res.redirect('/signIn')
    }
};