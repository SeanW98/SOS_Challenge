const Business = require('../models/business');

exports.get_landing = function(req, res) {
    res.render('landing');
};

exports.search = function(req, res) {
    const name = req.body.name;
    const location = req.body.location; //location will be used for later development
    Business.find({businessName: {$regex:name, $options: "^i"}})
    .exec()
        .then(search => {
            res.render('search',{results: search});
        })
};

//have 3 diffrent ladning functions. 
//one that tests if a token is logged in
//two diffrent redirect loggin pages

