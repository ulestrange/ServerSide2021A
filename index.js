const express = require('express')
const app = express()
const port = 3000

// set up handlebars view engine
var handlebars = require('express-handlebars')
.create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');


// static files can be served from the public folder

app.use(express.static('public'));



// Note the first route that gets matched is the one which will handle the request.

// app.get('/', (req, res) => res.send('Hello World from Una hurrah for a new semester!'))

// app.get('/',  (req, res) => {
//     res.type('text/plain');
//     res.send('Covid Holiday Tours');
// });

app.get('/', function (req, res) {
    res.render('home');
});


app.get('/about',  (req, res) => {
    
    res.render('about');
});

app.get('/contact',  (req, res) => {
    res.render('contact');
});

// just for now our data is here, we would normally get it from a database or
// a file - this is just to show how templates work and how we can pass them 
// data

var foil = { "name": "foil",
         "dob": "01/01/1998",
        "imageurl": "/images/foilimage1.png"}

var arms = { "name": "arms",
        "dob": "03/05/1995",
       "imageurl": "/images/armsimage1.png"}

var hog = { "name": "hog",
        "imageurl": "/images/hogimage1.png"}

app.get('/foil', (req,res) =>
       res.render('person', {person: foil} ))

app.get('/arms', (req,res) =>
       res.render('person', {person: arms} ))

app.get('/hog', (req,res) =>
       res.render('person', {person: hog} ))

// custom 404 page
app.use( (req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

// custom 500 page
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
