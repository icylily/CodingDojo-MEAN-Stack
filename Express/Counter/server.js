var express = require("express");
var bodyParser = require('body-parser');
var session = require('express-session');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    if(!req.session.times){
        req.session.times=1;
    }
    else{
        req.session.times+=1;
    }
    res.render('index', { times: req.session.times});
});
// route to process new user form data:
app.post('/addTwo', function (req, res) {
    // code to add user to db goes here!
    // redirect the user back to the root route. 
    // All we do is specify the URL we want to go to:
    req.session.times += 1;
    res.redirect('/');
})

app.post('/reset', function (req, res) {
    // set the name property of session.  
    delete req.session.times;
    //code to add user to db goes here!
    // redirect the user back to the root route. 
    res.redirect('/');
});

const port = 8000;
app.listen(port,function(){
    console.log("listening on port "+port);
})