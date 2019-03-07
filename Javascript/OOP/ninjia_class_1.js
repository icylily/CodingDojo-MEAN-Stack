function Ninja(name){
    this.name = name;
    this.healthy =100;
    var speed = 3;
    var strength = 3;
    this.sayName =  function(){
        console.log("My ninja name is "+this.name+"!");
    };
    this.showStats = function(){
        console.log("Name: "+this.name+", Health: "+this.healthy+", Speed: "+speed+", Strength: "+strength);
    }
    this.drinkSake = function(){
        this.healthy +=10;
    }
    this.punch = function(ninjia){
        if (ninjia instanceof Ninja) {
        ninjia.healthy -=5;
        console.log(ninjia.name +" was Punched by "+ this.name+" and lost 5 Health!");
        }
        else {
            console.log("Please input a ninjia instance!");
        }
        // "Goemon was punched by Bill Gates and lost 5 Health!"
    }
    this.getStrength =  function(){
        return strength;
    }
    this.setStrength = function(num){
        strength =  num;
        return strength;
    }
    this.kick =  function(ninjia){
        if (ninjia instanceof Ninja){
            ninjia.healthy -= strength * 15;
            console.log(ninjia.name + " was kicked by " + this.name + " and lost " + strength * 15 + " Health!");
        }
        else{
            console.log ("Please input a ninjia instance!");
        }
        
    }

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
var aa=1;
blueNinja.kick(aa);