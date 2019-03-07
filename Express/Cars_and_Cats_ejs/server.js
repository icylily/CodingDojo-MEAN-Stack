// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");
var app = express();
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.get("/users", function (request, response) {
    // hard-coded user data
    var users_array = [
        { name: "Michael", email: "michael@codingdojo.com" },
        { name: "Jay", email: "jay@codingdojo.com" },
        { name: "Brendan", email: "brendan@codingdojo.com" },
        { name: "Andrew", email: "andrew@codingdojo.com" }
    ];
    response.render('users', { users: users_array });
})
app.get("/cats", function (request, response) {
    
    response.render('cats');
})
app.get("/cars", function (request, response) {

    response.render('cars');
})
app.get("/forms", function (request, response) {

    response.render('forms');
})
app.get("/", function (request, response) {

    response.render('index');
})
app.listen(8000, function () {
    console.log("listening on port 8000");
})