const express = require('express')
const app = express()
const port =  process.env.port || 3000;

// set up cookie handling middleware

const cookieParser = require('cookie-parser');

app.use(cookieParser("una is great!!"));



// set up handlebars view engine
var handlebars = require('express-handlebars')
    .create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');


// static files can be served from the public folder

app.use(express.static('public'));

// import the data we need

const testData = require('./lib/data.js');

console.table(testData.getPeopleData());



// Note the first route that gets matched is the one which will handle the request.

// app.get('/', (req, res) => res.send('Hello World from Una hurrah for a new semester!'))

// app.get('/',  (req, res) => {
//     res.type('text/plain');
//     res.send('Covid Holiday Tours');
// });

app.get('/',  (req, res) => {

    var message = "";
     
    if (req.signedCookies.tracking){
        var dateLastVisit = req.signedCookies.tracking;
        var message = "Welcome back, you last visited on : " + dateLastVisit;
    }

    var currentDate = new Date();
    res.cookie('tracking',currentDate.toDateString(), {signed : true});

    res.render('home', {'message': message});
});



app.get('/about', (req, res) => {


    res.render('about');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

// just for now our data is here, we would normally get it from a database or
// a file - this is just to show how templates work and how we can pass them 
// data



// app.get('/foil', (req,res) =>
//        res.render('person', {person: data.foil} ))

// app.get('/arms', (req,res) =>
//        res.render('person', {person: data.arms} ))

// app.get('/hog', (req,res) =>
//        res.render('person', {person: data.hog} ))

app.get('/personlist', (req, res) =>
        res.render('personlist', { personlist: testData.getPeopleData() }))

app.get('/personlist/:name', (req, res) => {

            var name = req.params.name;
            var data = testData.getPeopleData();

            if (data[name] == null) {
                res.render('404'); // could also have a special page for person not found
            }
            else {
                res.render('person', { person: data[name] })
            }


        })




// custom 404 page
app.use((req, res) => {
            
            res.render('404');
        });

    // custom 500 page
    app.use((err, req, res, next) => {
        console.error(err.stack);
        res.type('text/plain');
        res.status(500);
        res.send('500 - Server Error');
    });


    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
