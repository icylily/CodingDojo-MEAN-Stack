class Ninja {
    constructor(name){
        this.name=name;
        this.healthy = 100;
        this.speed = 3;
        this.strength = 3;
        
    }
    sayName() {
        console.log("My ninja name is " + this.name + "!");
    };

    showStats() {
        console.log("Name: " + this.name + ", Health: " + this.healthy + ", Speed: " + this.speed + ", Strength: " + this.strength);
    };

    drinkSake() {
        this.healthy += 10;
    };
    punch(ninjia) {
        if (ninjia instanceof Ninja) {
            ninjia.healthy -= 5;
            console.log(ninjia.name + " was Punched by " + this.name + " and lost 5 Health!");
        }
        else {
            console.log("Please input a ninjia instance!");
        }
    };
    getStrength() {
        return strength;
    };
    setStrength(num) {
        strength = num;
        return strength;
    };
    kick(ninjia) {
        if (ninjia instanceof Ninja) {
            ninjia.healthy -= this.strength * 15;
            console.log(ninjia.name + " was kicked by " + this.name + " and lost " + this.strength * 15 + " Health!");
        }
        else {
            console.log("Please input a ninjia instance!");
        }
    };
}

var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
blueNinja.kick(redNinja);
blueNinja.showStats();
redNinja.showStats();
var aa = 1;
blueNinja.kick(aa);

// class Dot {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//     showLocation() {
//         // ES6 String Interpolation! Note that the string is enclosed in backticks, not quotes.
//         console.log(`This Dot is at x ${this.x} and y ${this.y}`);
//     }
// }
// const dot2 = new Dot(5, 13);
// dot2.showLocation();