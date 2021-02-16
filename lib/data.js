

var peopleData = {
    "foil": {
        "name": "foil",
        "dob": "01/01/3030",
        "imageurl": "/images/foilimage1.png",
        "hobbies": ["Jokes", "Gags", "Stand up"]
    },
    "arms": {
        "name": "arms",
        "dob": "03/05/1995",
        "imageurl": "/images/armsimage1.png"
    },
    "hog": {
        "name": "hog",
        "imageurl": "/images/hogimage1.png"
    },

    "hog2": {
        "name": "hog",
        "imageurl": "/images/hogimage1.png"
    },
    "hog3": {
        "name": "hog",
        "imageurl": "/images/hogimage1.png"
    },
    "hog4": {
        "name": "hog",
        "imageurl": "/images/hogimage1.png"
    }
}


// module.exports = {
//     getPeopleData: async () => {
//         return peopleData;
//     }
// }

exports.getPeopleData = () => {return peopleData }