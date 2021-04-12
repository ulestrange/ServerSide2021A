const mongoose = require('mongoose');

const Staff = require('../models/staff.js');

const connectionString = 'mongodb://127.0.0.1:27017/ssdemo'

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



// Check if there is already any data in the database, if so - do nothing.
// if there is no data create three new 'staff' documents and store them in the database.
// 

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

function createStaff (data){
    let staffDoc = new Staff(data);
    staffDoc.save()
    .then((result) => {
        console.log('data saved');
    })
    .catch((error) => {
        console.log('error with saving')
    });
    console.log('promising to save');
}

function updateStaff (data){

}

async function deleteStaff (name){
    staff = await Staff.findOne({name : name});
    await staff.remove();    
}

module.exports = {

    //lean returns a json object rather than a mongoose document.
     
     getPeopleData: async ( options = {}) => Staff.find(options).lean(), 
     createStaff: createStaff,
     deleteStaff: deleteStaff
}


