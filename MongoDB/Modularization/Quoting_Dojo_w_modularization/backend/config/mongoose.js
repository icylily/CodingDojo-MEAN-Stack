const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quotesdb', { useNewUrlParser: true });
// create a variable that points to the models folder
path = require('path');
var models_path = path.join(__dirname, './../models');
console.log("model_path is: " +models_path);
const fs = require('fs');
// read all of the files in the models_path and require (run) each of the javascript files
fsr=fs.readdirSync(models_path).forEach(function (file) {
    if (file.indexOf('.js') >= 0) {
        console.log("file is:" +file);
        // require the file (this runs the model file which registers the schema)
        require(models_path + '/' + file);
        console.log(models_path + '/' + file);
    }
})

