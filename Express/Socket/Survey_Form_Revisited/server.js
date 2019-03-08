const express = require('express');
var bodyParser = require('body-parser');
const app = express();
var querystring = require("querystring");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

app.get('/', function (req, res) {

    res.render('index');

});
app.post("/result", function (req, res) {

    res.redirect("/");
});

const port = 1234;
const server = app.listen(port,function(){
    console.log("Start listen to port "+port)
});

const io = require('socket.io')(server);
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// Assign rand num var to zero
var getRandNum = 0;

// Inside this method server listens for events to occur
// and then can emit when an event from somewhere else,
// like a client occurs
io.sockets.on("connection", function (socket) {

    // This line console logs to
    // terminal if sockets are running
    console.log("Sockets are running!");

    // Listen for the form submission event
    // on the client side
    socket.on("posting_form", function (client_data) {
        getRandNum = randomNumber(1, 1000);

        var parseFormData = querystring.parse(client_data.response);

        console.log(parseFormData);
        var name = parseFormData.name;
        var dojo_location = parseFormData.location;
        var fav_language = parseFormData.language;
        var comment = parseFormData.description;

        socket.emit("updated_message", { response: "<p>You have emitted the following information to the server:<br />{ name: " + name + ", location: " + dojo_location + ", fav_language: " + fav_language + ", comment: " + comment + " }</p><p>Your lucky number emitted by the server is:<br />" + getRandNum + "</p>" }
        );

    });
});