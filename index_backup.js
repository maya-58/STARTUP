// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

//var connectDB=require('../API/config/cosmos_db');
const rundb = require('./config/cosmos_db');



//rundb(); //it is working


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use();
var port = process.env.PORT || 5080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

var apifunction= require('./routes/api/first-api');

app.use('/api',apifunction);

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
/*router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});


router.get('/hi', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!- Method 1' });   
});
*/

//router.use('/ok',apifunction );

app.post('/hey', function (req, res) {
    res.send('POST request my the homepage')
  });
// more routes for our API will happen here
//DB Connection
//router.use('/api/firstapi',require());
//rundb(); 
//sync connectDB.rundb();


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
//app.use('/api/firstapi', require('./routes/api/first-api'));

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);

console.log("Db connection starts");


module.exports = router ;