const jwt = require('jsonwebtoken');

module.exports = (req,res,next) => {
    try{
        let token = req.cookies.token;
        console.log(token)
        const decoded = jwt.verify(token, 'secret');
        req.userDate = decoded;
        next();
    }catch (error){
        res.send('error')
    }
};