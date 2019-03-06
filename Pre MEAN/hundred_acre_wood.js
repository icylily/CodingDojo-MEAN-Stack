var heffalumps = { 
    character: "Heffalumps" ,
    west : eeyore,
    greet: function () {
        console.log("Hello .I'm Heffalumps!");
    }

};
var eeyore = { 
    character: "EEyore" ,
    east : heffalumps,
    south : kanga,
    greet: function () {
        console.log("Hello .I'm EEyore!");
    }
};

var kanga = { 
    character: "Kanga",
    north : eeyore,
    south : boy,
    greet: function () {
        console.log("Hello .I'm Kanga!");
    }
};
var boy = { 
    character: "Christopher Robin",
    north :kanga,
    west :owl,
    east : rabbit,
    south : pooh,
    greet: function () {
        console.log("Hello .I'm Robin!");
    }
 };


var owl = { 
    character: "Owl", 
    south : piglet,
    east : boy,
    greet: function () {
        console.log("Hello .I'm Owl!");
    }
};

var rabbit = { 
    character: "Rabbit",
    west : boy,
    east : gopher,
    south : bees,
    greet: function () {
        console.log("Hello .I'm Rabbit!");
    }
 };


var gopher = { 
    character: "Gopher",
    west : rabbit,
    greet: function () {
        console.log("Hello .I'm Gopher!");
    }
 };


var bees = { 
    character: "Bees",
    north : rabbit,
    greet: function () {
        console.log("Bzz .Bzz Bzzzz Bzzzz!");
    }
 };


var pooh = { 
    character: "Winnie the Pooh" ,
    north : boy,
    south : tigger,
    east : bees,
    west : piglet,
    greet: function () {
        console.log("Oh brother!");
    }
};


var piglet = { character: "Piglet" ,
    east : pooh,
    north : owl,
    greet: function () {
        console.log("Oh d-d-d-d-dear! I wasn't expecting company!");
    }
};




var tigger = {
    character: "Tigger",
    north: pooh,        // assuming that pooh is an object that has already been declared
    greet: function () {
        console.log("The wonderful thing about Tiggers is Tiggers are wonderful things!");
    }
};
tigger.greet();
// var tigger = { character: "Tigger" }; // start with just the character attribute
// tigger.north = pooh; // add more attributes, where we are actually storing the memory location for the other object


var player = {
    location: tigger,
}

function move(direction) {
    if (direction == "west") {
        if (player['location'].west == null) {
            console.log("You may not go that way!");
        }
        else {
            player['location'] = player['location'].west;
            console.log("You are now at " + player['location']['character'] + "'s house!");
        }
    }
    if (direction == "east") {
        if (player['location'].east == null) {
            console.log("You may not go that way!");
        }
        else {
            player['location'] = player['location'].east;
            console.log("You are now at " + player['location']['character'] + "'s house!");
        }
    }
    if (direction == "south") {
        if (player['location'].south == null) {
            console.log("You may not go that way!");
        }
        else {
            player['location'] = player['location'].south;
            console.log("You are now at " + player['location']['character'] + "'s house!");
        }
    }
    if (direction == "north") {
        if (player['location'].north == null) {
            console.log("You may not go that way!");
        }
        else {
            // console.log(player['location'].north);
            player['location'] = player['location'].north;
            console.log("You are now at " + player['location']['character'] + "'s house!");
        }
    }
    player['location'].greet();
}

function pickup(){
    if (player['location'] == bees){
        console.log("You've gathered some honey!")
    }
    else{
        console.log("You can't gather honey from this place!")
    }
}
function drop(){
    if (player['location'] == pooh) {
        console.log("Congratulations! You delivered the honey to Winnie the Pooh!")
    }
    else {
        console.log("Whoops!This isn't the place that needs the honey!")
    }
}

move("north");
pickup();
drop();
move("north");
pickup();
drop();
move("east");
pickup();
drop();
move("east");
pickup();
drop();
move("west");
pickup();
drop();