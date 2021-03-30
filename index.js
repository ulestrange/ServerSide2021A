const express = require('express')
const app = express()
const port =  process.env.PORT|| 3000;


// the database

require('./lib/db');
// import all the routers

const baseRouter = require('./routes/base');
const staffRouter = require('./routes/staff');


// set up cookie handling middleware

const cookieParser = require('cookie-parser');

app.use(cookieParser("una is great!!"));

// middleware for parsing the body of a form need this before you can use req.body

app.use(express.urlencoded({ extended: true })) 

// set up session handling middleware: note this uses cookies so that needs to be set
// up too.

session = require('express-session');


app.use(session(
    {secret: "una is great!!", 
    cookie: { maxage: 6000},
    resave: false,
    saveUninitialized: false
  }))




// set up handlebars view engine
var handlebars = require('express-handlebars')
    .create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');


// static files can be served from the public folder

app.use(express.static('public'));


// import our own Middleware

const {flashMiddleware, newsMiddleware, testMiddleware} = require('./lib/middleware.js');
//app.use(flashMiddleware);
//app.use(testMiddleware);


// settting up our own routes

app.use ('/', baseRouter);

app.use('/staff', staffRouter)









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
