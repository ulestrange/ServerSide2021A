

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
    }
}

var sampleData = {
    
      
        "Title": "The Graduate",
        "Year": "1967",
        "Rated": "Approved",
        "Released": "22 Dec 1967",
        "Runtime": "106 min",
        "Genre": [
          "Comedy",
          "Drama",
          "Romance"
        ],
        "Director": "Mike Nichols",
        "Writers": [
          "Calder Willingham (screenplay)",
          "Buck Henry (screenplay)",
          "Charles Webb (based on the novel by)"
        ],
        "Actors": [
          "Anne Bancroft",
          "Dustin Hoffman",
          "Katharine Ross",
          "William Daniels"
        ],
        "Plot": "Ben has recently graduated college, with his parents now expecting great things from him. At his \"Homecoming\" party, Mrs. Robinson, the wife of his father's business partner, has Ben drive her home, which leads to an affair between the two. The affair eventually ends, but comes back to haunt him when he finds himself falling for Elaine, Mrs. Robinson's daughter.",
        "Language": "English",
        "Country": "USA",
        "Awards": "Won 1 Oscar. Another 22 wins & 13 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTQ0ODc4MDk4Nl5BMl5BanBnXkFtZTcwMTEzNzgzNA@@._V1_SX300.jpg",
        "imdbRating": "8.1",
        "imdbVotes": "183,131",
        "imdbID": "tt0061722"
      }



// note: either of these will work and will export the symbol getPeopleData.

//exports.getPeopleData = () => {return peopleData }

module.exports = { getPeopleData: () => { return peopleData } , getSampleData: () => { return sampleData}}