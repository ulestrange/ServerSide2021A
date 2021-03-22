const express = require('express');
const router = express.Router();

// import the data we need

const testData = require('../lib/data.js');

router.get('/', (req, res) =>
    res.render('personlist', { personlist: testData.getPeopleData() }));



router.get('/addnew', (req, res) => {

    res.render('personform')
}
)

router.get('/personadded', (req, res) => {

    if (req.session.staffdata) {
        var newName = req.session.staffdata.name;
    }
    else {
        var newName = "";
    }
    res.render('personadded', { name: newName })
})

// router.post('/addnew', (req, res) => {
//      let fname = req.body.firstname;
//      let sname = req.body.surname;
//      console.log('Data entered ' + fname + ' ' + sname);   
//      res.render('personform', {name1 : fname, name2: sname})

// })

// This implments POST/REDIRECT/GET it uses
// a session to take data from this page to the personadded page.

// router.post('/addnew', (req, res) => {
//     console.log("Data received froma  post");
//     console.table(req.body);
//     req.session.staffdata = { name: req.body.firstname + " " + req.body.surname }
//     res.redirect(303, '/staff/personadded',)
// })

// This implements POST/REDIRECT/GET
//this time is uses a flash message

router.post('/addnew', (req, res) => {
    console.log("Data received from a  post");
    console.table(req.body);
    req.session.flash = 
    { type: 'success', intro: 'Data Saved:', message:  "Data for <strong>" + req.body.firstname + " " + req.body.surname + "</strong> has been added"}
    res.redirect(303, '/staff')
})




router.get('/:name', (req, res) => {

    var name = req.params.name;
    var data = testData.getPeopleData();

    if (data[name] == null) {
        res.render('404'); // could also have a special page for person not found
    }
    else {
        res.render('person', { person: data[name] })
    }


})



module.exports = router;