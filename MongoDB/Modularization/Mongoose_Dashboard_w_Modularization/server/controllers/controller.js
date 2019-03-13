const { Animals, } = require('../models/models');
module.exports = {
    index: function (req, res) {
        Animals.find({}, function (err, animals) {
            if (err)
                console.log("Error matching DB request")
            else
                res.render('index', { info: animals });
        });
    },
    new_animal_page: function (req, res) {
        res.render("new_animal");
    },
    create_a_animal:function(req,res){
        //  console.log("post data: ", req.body);
        var animal = Animals.create(req.body);
        res.redirect('/');
    },
    show_a_animal:function(req,res){
        Animals.findOne({ _id: req.params.id }, function (err, animal) {
            // findOne({ id: req.params.id }
            // console.log(animal);
            if (err)
                console.log("Error matching DB request")
            else
                res.render('details_animal', { info: animal });
        });
    },
    show_edit_page:function(req,res){
        Animals.findOne({ _id: req.params.id }, function (err, animal) {
            // findOne({ id: req.params.id }
            // console.log(animal);
            if (err)
                console.log(" details_page Error matching DB request")
            else
                res.render('edit_animal', { info: animal });
        });
    },
    edit_a_animal:function(req,res){
        console.log('/animals/edit_process/:id ' + req.params.id);
        Animals.findOne({ _id: req.params.id }, function (err, animal) {
            if (err) {
                console.log("Error matching DB request");
            }
            else {
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
    },
    delete_a_animal:function(req,res){
        console.log("remove" + req.params.id);
        Animals.findOne({ id: req.params.id }, function (err, animal) {
            console.log(animal);
        })
        Animals.findOneAndDelete({ _id: req.params.id }, function (err) {
            console.log("deleteone");
            if (err) {
                console.log("Error matching DB request");
                // console.log(err);
            }
            else
                res.redirect("/");
        });
    }
    
};