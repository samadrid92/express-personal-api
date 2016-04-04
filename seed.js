// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.
var db = require('./models');

var architect_list = [
  {
    name: "Craig Ellwood",
    year_born: 1922,
    nationality: "Amercian",
    deceased: true,
    image: "http://imgur.com/LFEBaGo",
    notable_works: [{
      name: "The Moore House",
      image: "http://imgur.com/Kx5UbxJ"
    }]
  },
  {
    name: "Zaha Hadid",
    year_born: 1950,
    nationality: "Iraqui",
    deceased: true,
    image: "http://imgur.com/WXNIVum",
    notable_works: [{
      name:"Hegdar Aliyev Cultural Center",
      image: "http://imgur.com/lRSxN7k"
    }]
  },
  {
    name: "Frank Loyd Wright",
    year_born: 1867,
    nationality: "American",
    deceased: true,
    image: "http://imgur.com/d70wTl9",
    notable_works: [{
      name: "Marin County Civic Center",
      image: "http://imgur.com/jUACSmh"
    }]
  },
  {
    name: "Frank Gehry",
    year_born: 1929,
    nationality: "Canadian-American",
    deceased: false,
    image: "http://imgur.com/MnGXf7u",
    notable_works: [{
      name: "Walt Disney Concert Hall",
      image: "http://imgur.com/itj9ViG"
    }]
  },
  {
    name: "Daniel Libeskind",
    year_born: 1946,
    nationality: "polish"
    deceased: false,
    image: "http://imgur.com/INqCoeS",
    notable_works: [{
      name: "Contemporary Jewish Musuem",
      image: "http://imgur.com/r3fnxJ8"
    }]
  }
];

var notable_works = [
  {
    name: "The Moore House",
    image: "http://imgur.com/Kx5UbxJ"
  },
  {
    name:"Hegdar Aliyev Cultural Center",
    image: "http://imgur.com/lRSxN7k"
  },
  {
    name: "Marin County Civic Center",
    image: "http://imgur.com/jUACSmh"
  },
  {
    name: "Walt Disney Concert Hall",
    image: "http://imgur.com/itj9ViG"
  },
  {
    name: "Contemporary Jewish Musuem",
    image: "http://imgur.com/r3fnxJ8"
  }
]

db.Profile.remove({}, function(err, profile){
  console.log('removed profile info');
  db.Profile.create(profile, function(err, newProfile){
    if (err) {
      return console.log(err);
    }
    console.log(newProfile);
  });
});


// var new_campsite = {description: "Sharp rocks. Middle of nowhere."}

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })
