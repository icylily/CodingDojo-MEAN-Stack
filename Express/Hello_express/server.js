// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");
// console.log("Let's find out what express is\n", express);
// invoke express and store the result in the variable app
var app = express();
// console.log("Let's find out what app is", app);
// use app's get method and pass it the base route '/' and a callback
app.use(express.static(__dirname + "/static"));
// console.log("\n-----------------------\n"+__dirname);
app.get('/', function (request, response) {
    // just for fun, take a look at the request and response objects
    // console.log("The request object", request);
    // console.log("The response object", response);
    // use the response object's .send() method to respond with an h1
    response.send("<h1>Hello Express</h1>");
})
// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function () {
    console.log("listening on port 8000");
})
// Run the server.js file using node(but use nodemon, it will make your life easier) and see the magic happen!

// nodemon server.js
// Privacy Policy