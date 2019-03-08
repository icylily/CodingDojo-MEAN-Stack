// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");
var app = express();
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
var cats_array = [
    { name: "Kitty", age: 1, favor_food: "fish", favor_thing: ["sleeping", "climb tree"] },
    { name: "Julia", age: 2, favor_food: "Chocalete", favor_thing: ["climb tree", "chase bird"] },
    { name: "Mahia", age: 3, favor_food: "chicken", favor_thing: ["sleeping", "bask in the sun "] },

];

app.get("/cats", function (request, response) {

    response.render('cats');
})

app.get("/cat1", function (request, response) {

    response.render('cat_detail', { cat: cats_array[0],num:1 });

})
app.get("/cat2", function (request, response) {

    response.render('cat_detail', { cat: cats_array[1], num: 2});

})
app.get("/cat3", function (request, response) {

    response.render('cat_detail', { cat: cats_array[2], num: 3});
})
app.get("/", function (request, response) {

    response.render('index');
})
app.listen(8000, function () {
    console.log("listening on port 8000");
})