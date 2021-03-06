//1.--------------------------------------------------------------------
var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// mystring's basic type is tring, can not be a number
myString = "Have to be a string";

//2.------------------------------------------------------------------------
function sayHello(name: string) {
    return `Hello, ${name}!`;
}
// This is working great:
console.log(sayHello("Kermit"));
// function expect a param type is string not a number
console.log(sayHello("9"));

//3.--------------------------------------------------------------------------------
function fullName(firstName: string, lastName: string, middleName?: string) {
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
}
// This works:
console.log(fullName("Mary", "Moore", "Tyler"));
// What do I do if someone doesn't have a middle name?
//You can set the third parameter as optional.Set the method to a question mark after the parameter definition
console.log(fullName("Jimbo", "Jones"));

//4.-----------------------------------------------------------------------
interface Student {
    firstName: string;
    lastName: string;
    belts: number;
}
function graduate(ninja: Student) {
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
}
const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belts: 4// the key of obj-student is belts not belt
}
// This seems to work fine:
console.log(graduate(christine));
// This one has problems:
console.log(graduate(jay));

//5.----------------------------------------------------------------------
class Ninja {
    fullName: string;
    constructor(
        public firstName: string,
        public lastName: string) {
        this.fullName = `${firstName} ${lastName}`;
    }
    debug() {
        console.log("Console.log() is my friend.")
    }
}
// This is not making an instance of Ninja, for some reason:
const shane = new Ninja("Alan", "Turing");//need two parameters and new keyword
// Since I'm having trouble making an instance of Ninja, I decided to do this:
const turing = {
    fullName: "Alan Turing",
}
// Now I'll make a study function, which is a lot like our graduate function from above:
function study(programmer: Ninja) {
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}
// Now this has problems:
console.log(study(shane));//have to pass the parameter as  a instance of class Ninja


//6.-----------------------------------------------------------------------
var increment = x => x + 1;
// This works great:
console.log(increment(3));
var square = x => { x * x };
// This is not showing me what I want:
console.log(square(4));
// This is not working:
var multiply = (x, y) => x * y;
// Nor is this working:
var math = (x, y) => {
    let sum = x + y;
    let product = x * y;
    let difference = Math.abs(x - y);
    return [sum, product, difference];
}  

//7.---------------------------------------------------------------------
class Elephant {

    constructor(public age: number) {
    }
    birthday = age => this.age++;

}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(function () {
    console.log(`Babar's age is ${babar.age}.`)
}, 2000)
