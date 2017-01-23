var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

// var songs = require('./data.json'); //
var math = require('./routes/math');

var app = express();

app.use(express.static('public'));

// convert any url encoded body into a JS object
// added to req.body
app.use(bodyParser.urlencoded({extended: true}));

app.use('/math', math);
//sends all /math requests to the math.js router.

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

app.listen(3000);
