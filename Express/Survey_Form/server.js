var express = require("express");
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    
    res.render('index');
});
// route to process new user form data:
var information={};
app.post('/process', function (req, res) {
    information.name = req.body.name;
    information.location = req.body.location;
    information.language = req.body.language;
    information.description = req.body.description;
    res.redirect('/result');
})

app.get('/result', function (req, res) {
    
    res.render('result', { info: information});
});

const port = 8000;
app.listen(port, function () {
    console.log("listening on port " + port);
})