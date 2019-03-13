const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose =  require('mongoose');
mongoose.connect('mongodb://localhost/messagesdb', { useNewUrlParser: true });

const session = require('express-session');
app.set('trust proxy', 1) // trust first proxy
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
const flash = require('express-flash');
app.use(flash());
app.use(bodyParser.urlencoded({extended:true}));
var path = require('path');
// app.use(express.static(path.join(__dirname),'static'));app.use(express.static(path.join(__dirname,'./static')));
app.use(express.static(path.join(__dirname,'static')));
app.set('Views',path.join(__dirname,"views"));
app.set('view engine','ejs');

const port = 7000;
app.listen(port,function(){
    console.log("listenig on port"+port);
})

const CommentSchema = new mongoose.Schema({
    name: { type: String, required: [true, "comment must have a author name"] },
    comment: { type: String, required: [true, "Posts must have content"] },
    // name: { type: String, required: [true, "Posts must have a title"] },
    // username: { type: String, required: [true, "Posts must have a title"] },
}, { timestamps: true })
const MessageSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Message must have a author name"] },
    message: { type: String, required: [true, "Message must have a content"], minlength: [3, "content must have at least 3 characters"] },
    comments: [CommentSchema],
}, { timestamps: true })

const Message = mongoose.model('Message', MessageSchema);
// var Message = mongoose.model('Message');
const Comment = mongoose.model('Comment',CommentSchema);
// var Comment = mongoose.model('Comment');
app.get('/',function(req,res){
    Message.find({},function(err,messages){
        if(err){
            console.log("find all message---err");
        }
        else{
            res.render('index',{info:messages});
        }
    });
});


app.post('/add_message',function(req,res){
    var message = new Message(req.body);
    message.save(function(err){
        if (err) {
            // if there is an error upon saving, use console.log to see what is in the err object 
            console.log("We have an error!", err);
            // adjust the code below as needed to create a flash message with the tag and content you would like
            for (var key in err.errors) {
                req.flash('registration', err.errors[key].message);
            }
            // redirect the user to an appropriate route
            res.redirect('/');
        }
        else {
            res.redirect('/');}
    })
})
    

app.post('/add_comment/:id',function(req,res){
    Comment.create(req.body, function (err, data) {
        if (err) {
            // handle the error from creating a blog
        }
        else {
            Message.findOneAndUpdate({ _id: req.params.id }, { $push: { comments: data } }, function (err, data) {
                if (err) {
                    console.log('update message--err');
                }
                else {
                    res.redirect('/');
                }
            })
        }
    })    
})
