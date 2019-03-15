class Bike {
    price: number;
    max_speed: number;
    miles: number;
    constructor(price: number, max_speed: number) {
        this.price = price;
        this.max_speed = max_speed;
        this.miles = 0;
    }
    displayInfo() {
        console.log("This bike's price is :" + this.price + " and max_spped is: " + this.max_speed + "and miles is:" + this.miles);
    }
    ride() {
        console.log("Riding...");
        this.max_speed += 10;
        return this;
    }
    reverse() {
        console.log('Reversing...');
        if (this.miles < 5) {
            console.log("Reversed miles to 0");
            this.miles = 0;
        }
        else {
            console.log("Reversed 5 miles");
            this.miles -= 5;
        }
        return this;
    }
}
let bike1 = new Bike(200, 25);
let bike2 = new Bike(300, 35);
let bike3 = new Bike(100, 20);
bike1.ride().ride().ride().reverse().displayInfo();
bike2.ride().ride().reverse().reverse().displayInfo();
bike3.reverse().reverse().reverse().displayInfo();