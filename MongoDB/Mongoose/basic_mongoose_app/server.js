var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mydb1', { useNewUrlParser: true });
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
// Routes
// Root Request
app.get('/', function (req, res) {
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    User.find({}, function (err, users) {
        if (err)
            console.log("Error matching DB request")
        else
            res.render('index', { info: users });
    });
   
})

app.listen(8000, function () {
    console.log("listening on port 8000");
})

var UserSchema = new mongoose.Schema({
    name: String,
    age: Number
})
mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
// console.log("mongoose is :"+mongoose);
var User = mongoose.model('User') ;
// var user = new User({ name: "abd", age: 9});
// // We are retrieving this Schema from our Models, named 'User'
// console.log("User is " +User);
// Use native promises (only necessary with mongoose versions <= 4)
mongoose.Promise = global.Promise;

app.post('/users', function (req, res) {
    console.log("POST DATA", req.body);
    var user = new User({ name: req.body.name, age: req.body.age });
    // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
    user.save(function (err) {
        // if there is an error console.log that something went wrong!
        if (err) {
            console.log('something went wrong');
        } else { // else console.log that we did well and then redirect to the root route
            console.log('successfully added a user!');
        }
        res.redirect('/');
    });

})