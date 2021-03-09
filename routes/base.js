const express = require('express');
const router = express.Router();

router.get('/',  (req, res) => {

    var message = "";
     
    if (req.signedCookies.tracking){
        var dateLastVisit = req.signedCookies.tracking;
        var message = "Welcome back, you last visited on : " + dateLastVisit;
    }

    var currentDate = new Date();
    res.cookie('tracking',currentDate.toDateString(), {signed : true});

    res.render('home', {'message': message});
});


router.get('/about',  (req, res) => {

    
    res.render('about');
});

router.get('/contact',  (req, res) => {
    res.render('contact');
});

module.exports = router;