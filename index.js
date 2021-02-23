const express = require('express')
const app = express()
const port = 3000


// import all the routers

const baseRouter = require('./routes/base');
const staffRouter = require('./routes/staff');


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
