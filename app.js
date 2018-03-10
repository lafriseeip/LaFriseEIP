var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('index.ejs');
});

app.get('/:num', function(req, res) {
    var title = "MON TITRE";
    res.render('index.ejs', {title: title, num: req.params.num});
});

app.listen(8080);
