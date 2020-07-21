const jwt = require('JsonWebToken');

//JWT creates a user token so that it can be
//safely passed as a cookie when making sure a user
//is truly signed in

//If cookie is edit by user, JWT will notice and 
//have the cookie shown as invalid

module.exports = (req,res,next) => {
    try{
        const token = req.cookies.token;
        jwt.verify(token, 'secret');
        next();
    }catch (error){
        res.redirect('/signIn');
    }
};