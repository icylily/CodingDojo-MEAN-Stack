var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/animalsdb', { useNewUrlParser: true });

var AnimalSchama = new mongoose.Schema({
    name: String,
    kingdom: String,
    phylum: String,
    class: String,
    lifestyle: String,
    skin_type: String,
    favourite_food: String,
    description: String,
    created_at: { type: Date, required: true, default: Date.now },
}, {
        versionKey: false // You should be aware of the outcome after set to false
    }, { timestamps: true });

mongoose.model('Animals', AnimalSchama);
var Animals = mongoose.model('Animals');

module.exports = { Animals, }

