var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var moment = require('moment');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quotesdb',{useNewUrlParser:true});

app.use(bodyParser.urlencoded({extended:true}));

var path = require("path");
app.use(express.static(path.join(__dirname,'./static')));
app.set('Views',path.join(__dirname,'./views'));
app.set('view engine','ejs');

app.listen(8000,function(){
    console.log("listening on port 8000");
});

var QuoteSchema = new mongoose.Schema({
    user: String,
    name:String,
    created_at: { type: Date, required: true, default: Date.now },
}, {versionKey: false // You should be aware of the outcome after set to false
    },{ timestamps: true });
mongoose.model('Quotes',QuoteSchema);
var Quotes = mongoose.model('Quotes');

app.get('/',function(req,res){
    res.render('index');
})
app.get('/quotes', function (req, res) {
    Quotes.find({}, function (err, quotes) {
        if (err)
            console.log("Error matching DB request")
        else
            res.render('quotes', { info: quotes,moment:moment});
    });
})

app.post('/quotes',function(req,res){
    console.log("post data: ",req.body);
    var quote =new Quotes({user:req.body.user,name:req.body.name});
    quote.save(function (err) {
        // if there is an error console.log that something went wrong!
        if (err) {
            console.log('something went wrong');
        } else { // else console.log that we did well and then redirect to the root route
            console.log('successfully added a quote!');
        }
        res.redirect('/quotes');
    });
})