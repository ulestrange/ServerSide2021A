

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
    "glossary": {
        "title": "example glossary",
		"GlossDiv": {
            "title": "S",
			"GlossList": {
                "GlossEntry": {
                    "ID": "SGML",
					"SortAs": "SGML",
					"GlossTerm": "Standard Generalized Markup Language",
					"Acronym": "SGML",
					"Abbrev": "ISO 8879:1986",
					"GlossDef": {
                        "para": "A meta-markup language, used to create markup languages such as DocBook.",
						"GlossSeeAlso": ["GML", "XML"]
                    },
					"GlossSee": "markup"
                }
            }
        }
    }
}




// note: either of these will work and will export the symbol getPeopleData.

//exports.getPeopleData = () => {return peopleData }

module.exports = { getPeopleData: () => { return peopleData } , getSampleData: () => { return sampleData}}