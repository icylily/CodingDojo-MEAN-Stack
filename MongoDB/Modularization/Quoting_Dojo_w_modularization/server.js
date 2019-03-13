var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var moment = require('moment');



app.use(bodyParser.urlencoded({extended:true}));

var path = require("path");
app.use(express.static(path.join(__dirname,'./static')));
app.set('Views',path.join(__dirname,'./views'));
app.set('view engine','ejs');


require('./backend/config/routes')(app);
app.listen(8000, function () {
    console.log("listening on port 8000");
});