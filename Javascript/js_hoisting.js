// console.log(hello);
// var hello = 'world'; //undefine
//////////////////////////////////////////////////////
// var needle = 'haystack';
// test(); // magnet
// function test() {
//     var needle = 'magnet';
//     console.log(needle);
// }
/////////////////////////////////////////////////////////////////
// var brendan = 'super cool';
// function print() {
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);//super cool
////////////////////////////////////////////////////////////////
// var food = 'chicken';
// console.log(food);//chicken
// eat();//half-chicken
// function eat() {
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
////////////////////////////////////////////////////////////
// mean();//mean is not a function
// console.log(food);
// var mean = function () {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);
////////////////////////////////////////////////////////////
// console.log(genre);//undefine
// var genre = "disco";
// rewind();//rock
//         //r&b
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);//disco
//////////////////////////////////////////////////////////
// dojo = "san jose";
// console.log(dojo);//san jose
// learn();//seattle burbank
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);//san jose
/////////////////////////////////////////////////////////////
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
    let dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}
//{name: "Chicago", students: 65, hiring: true}
//Uncaught TypeError: Assignment to constant variable.