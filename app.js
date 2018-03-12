var express = require('express');

var wiki = require('wikijs');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('index.ejs');
});

app.get('/landing', function(req, res) {
  res.render('landing.ejs');
});

app.listen(8080);
