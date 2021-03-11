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

router.post('/addnew', (req, res) => {
    console.log("Data send via post");
    console.table(req.body);
    req.session.staffdata = { name: req.body.firstname + " " + req.body.surname }
    res.redirect(303, '/staff/personadded',)
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