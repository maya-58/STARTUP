
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var path = require('path');

//DB
const rundb = require('./config/cosmos_db');
//rundb(); //it is working

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/api1', require('./routes/api/first-api'));

const port = process.env.PORT || 5080;   
app.listen(port , () => console.log(`Server started on port ${port}`));