var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended:true}));

var path = require('path');
// app.use(expressg.static('static'));
app.use('/static', express.static('static'));
app.set('Views',path.join(__dirname,'./views'));
app.set('view engine','ejs');

require('./server/config/routes')(app);
const port = 8080;
app.listen(port,function(){
    console.log("listening on port" + port);
});




