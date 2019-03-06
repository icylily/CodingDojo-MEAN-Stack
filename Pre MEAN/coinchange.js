function coinchange(){
    if (arguments.length !=1){
        return false
    }
    var change={};
    var remainder = 0;

    if (typeof (arguments[0]) == "object") {
        // var remainder = 0;
        if ("pennie" in arguments[0]) {
            remainder += arguments[0]["pennies"];
        }
        if ("nickle" in arguments[0]) {
            remainder += arguments[0]["nickle"] * 5;
        }
        if ("dime" in arguments[0]) {
            remainder += arguments[0]["dime"] * 10;
        }
        if ("quarter" in arguments[0]) {
            remainder += arguments[0]["quarter"] * 25;
        }
        if ("dollar" in arguments[0]) {
            remainder += arguments[0]["dollar"] * 100;
        }

    }
    else if (typeof (arguments[0]) == "number"){
        remainder = arguments[0];
    }
    dollars = Math.floor(remainder/100);
    remainder = remainder%100;
    quarters = Math.floor(remainder /25);
    remainder= remainder %25;
    dimes = Math.floor(remainder/10);
    remainder = remainder%10;
    nickles =Math.floor(remainder/5);
    remainder = remainder%5;
    pennies = remainder;
    if (dollars!=0){
        change["dollar"]=dollars;
    }
    if (quarters != 0) {
        change["quarter"] = quarters;
    }
    if (dimes != 0) {
        change["dime"] = dimes;
    }
    if (nickles != 0) {
        change["nickle"] = nickles;
    }
    if (pennies != 0) {
        change["pennie"] = pennies;
    }
    return change;
}


x = 555;
console.log("x=",x);
console.log(coinchange(x));
cash = {
    dollar :4,
    quarter:10,
    nickle:8,
}
console.log("cash is :",cash);
console.log(coinchange(cash));
