var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/animalsdb',{useNewUrlParser:true});

app.use(bodyParser.urlencoded({extended:true}));

var path = require('path');
// app.use(expressg.static('static'));
app.use('/static', express.static('static'));
app.set('Views',path.join(__dirname,'./views'));
app.set('view engine','ejs');

const port = 8080;
app.listen(port,function(){
    console.log("listening on port" + port);
});

var AnimalSchama = new mongoose.Schema({
    name:String,
    kingdom:String,
    phylum:String,
    class:String,
    lifestyle:String,
    skin_type:String,
    favourite_food:String,
    description:String,
    created_at: { type: Date, required: true, default: Date.now },
}, {
    versionKey: false // You should be aware of the outcome after set to false
    }, { timestamps: true });

mongoose.model('Animals',AnimalSchama);
var Animals = mongoose.model('Animals');



app.get("/",function(req,res){
    Animals.find({}, function (err, animals) {
        if (err)
            console.log("Error matching DB request")
        else
            res.render('index', { info: animals});
    });
   
})

app.get("/animals/new",function(req,res){
    res.render("new_animal");
})

app.post("/animals/new",function(req,res){
    console.log("post data: ", req.body);
    var animal = Animals.create(req.body);
    
    res.redirect('/');
});


app.get('/animals/:id', function (req, res) {
    // console.log('/animals/:id  '+req.params.id)
    Animals.findOne({_id:req.params.id}, function (err, animal) {
        // findOne({ id: req.params.id }
        // console.log(animal);
        if (err)
            console.log("Error matching DB request")
        else
            res.render('details_animal', { info: animal});
    });
})
app.get('/animals/edit/:id', function (req, res) {
// app.get('/animals/edit/:id', function (req, res) {
    // console.log("details_page"+req.params.id)
    Animals.findOne({ _id:req.params.id }, function (err, animal) {
        // findOne({ id: req.params.id }
        // console.log(animal);
        if (err)
            console.log(" details_page Error matching DB request")
        else
            res.render('edit_animal', { info: animal });
    });
})

app.post('/animals/edit_process/:id', function (req, res) {
    console.log('/animals/edit_process/:id '+req.params.id);
    Animals.findOne({ _id: req.params.id },function(err,animal){
        if (err){
            console.log("Error matching DB request");
        }
        else{
            console.log(animal);
            animal.name = req.body.name,
            animal.kingdom = req.body.kingdom,
            animal.phylum = req.body.phylum,
            animal.personality = req.body.personality,
            animal.lifestyle = req.body.lifestyle,
            animal.skin_type = req.body.skin_type,
            animal.favourite_food = req.body.favourite_food,
            animal.description = req.body.description,
            animal.save();
            res.redirect("/animals/" + req.params.id);
        }
    });
    });

//     Animals.update({ _id:req.params.id }, {
//         name: "test",
//         // kingdom: req.body.kingdom,
//         // phylum: req.body.phylum,
//         // personality: req.body.personality,
//         // lifestyle: req.body.lifestyle,
//         // skin_type: req.body.skin_type,
//         // favourite_food: req.body.favourite_food,
//         // description: req.body.description,
//     }, function (err, animal) {
//         if (err)
//             {console.log("Error matching DB request");
//             // console.log(err);
//         }
//         else
//             res.redirect("/animals/" + req.params.id);
//     });
// });

app.post('/animals/destroy/:id',function(req,res){
    console.log("remove"+req.params.id);
    Animals.findOne({ id: req.params.id },function(err,animal){
        console.log(animal);
    })
    Animals.findOneAndDelete({_id:req.params.id},function(err){
        console.log("deleteone");
        if (err) {
            console.log("Error matching DB request");
            // console.log(err);
        }
        else
            res.redirect("/" );
    })
})
