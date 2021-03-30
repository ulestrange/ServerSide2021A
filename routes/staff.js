const express = require('express');
const router = express.Router();

// import the data we need

const testData = require('../lib/db.js');

router.get('/', async (req, res) => {
    const data = await testData.getPeopleData();
    console.log(data);


    res.render('personlist', { personlist: data })
}

);




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
        { type: 'success', intro: 'Data Saved:', message: "Data for <strong>" + req.body.firstname + " " + req.body.surname + "</strong> has been added" }
    res.redirect(303, '/staff')
})




router.get('/:name', async (req, res) => {

    var name = req.params.name;
    var data = await testData.getPeopleData({name: name});
    console.table(data);

    if (!data[0]) {
        res.render('404'); // could also have a special page for person not found
    }
    else {
        res.render('person', { person: data[0] })
    }


})



module.exports = router;