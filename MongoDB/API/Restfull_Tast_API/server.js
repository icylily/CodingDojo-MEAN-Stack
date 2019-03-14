var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));

require('./backend/config/routes')(app);
const port = 7000;
app.listen(port, function () {
    console.log("listening on port" + port);
});
