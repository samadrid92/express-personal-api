// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

/************
 * DATABASE *
 ************/

var db = require('./models');

var profile = {
  name: 'Scott A. Madrid',
  github_link: 'https://github.com/samadrid92',
  github_profile_image: 'https://www.facebook.com/photo.php?fbid=10152112897696644&l=8262beed61',
  current_city: 'San Francisco',
  pets: [
    {
      name: 'Minnie',
      type: 'Dog',
      breed: 'Golden Retriever'
    }
  ]
};

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    message: "Welcome to my personal api! Here's what you need to know!",
    documentation_url: "https://github.com/example-username/express_self_api/README.md", // CHANGE ME
    base_url: "https://rhubarb-pie-82009.herokuapp.com/", // CHANGE ME
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me"}, // CHANGE ME
      {method: "GET", path: "/api/architects", decription: "Displaying a beautiul list of architects"},
      {method: "POST", path: "/api/architects", description: "Posting a new Architect in our database"} // CHANGE ME
    ]
  });
});
/* Get Profile Information */
app.get('/api/profile', function profile_index(req, res){
    res.json({profile: profile});
  });


/*Get all architect*/
app.get('/api/architects', function architect_index(req, res){
  db.Architect.find(function(err, foundArchitect){
    if (err){
      return console.log("index error: " + err);
    }
    res.json(foundArchitect);
  });
});

/*Show a architect*/
app.get('/api/architects/:id', function architect_show(req, res){
  db.Architect.findById(req.params.id, function(err, foundArchitect){
    if (err){
      return console.log("show error: " + err);
    }
    res.json(foundArchitect);
  });
});
/*create a new architect*/
// app.post('/api/architects', function architect_create(req, res){
//   var newArchitect = new db.Architect({
//     name: req.body.name,
//     year_born: req.body.year_born,
//     nationality: req.body.nationality,
//     deceased: req.body.deceased,
//     image: req.body.image
//   });
// });
//   newArchitect.save(function(err, architect){
//     if (err) {
//       return console.log("save error: " + err);
//     }
//     console.log("saved ", architect.name);
//     res.json(architect);
//   });
  /*update a architect*/
  // app.put('/api/architects/:id', function architect_update(req, res){
  //   var architectId =
  // })

  /*delete a architect*/


/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
