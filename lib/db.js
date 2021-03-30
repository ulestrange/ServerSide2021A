const mongoose = require('mongoose');

const Staff = require('../models/staff.js');

const connectionString = 'mongodb://127.0.0.1:27017/staff'

mongoose.connect(connectionString, {
    "useNewUrlParser": true,
    "useUnifiedTopology": true,
    'useCreateIndex': true
}).
    catch(error => {
        console.log('Database connection refused' + error);
        process.exit(2);
    })

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
    console.log("DB connected")
});


// if there is data in the db it will return it
// otherwise this creates three new documents and stores them to the database

Staff.find((err, staff) => {
    if (err) return console.error(err);

    if (staff.length) return;

    new Staff({
        "name": "foil",
        "dob": "01/01/3030",
        "imageurl": "/images/foilimage1.png",
        "hobbies": ["Jokes", "Gags", "Stand up"]
    }).save();

    new Staff({
        "name": "arms",
        "dob": "03/05/1995",
        "imageurl": "/images/armsimage1.png"
    }).save();

    new Staff({
        "name": "hog",
        "imageurl": "/images/hogimage1.png"
    }).save();

});

module.exports = {

    //lean returns a json object rather than a mongoose document.
     
     getPeopleData: async ( options = {}) => Staff.find(options).lean()
}


