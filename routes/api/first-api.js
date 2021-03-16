
const express=require('express');
//var app        = express();    
const router = express.Router();
//const rundb = require("../API/config/cosmos_db");







router.get('/', function(req, res) {
    console.log("file touch");
    res.json({ message: 'hooray! welcome to our den-api!' });   
});

module.exports = router;