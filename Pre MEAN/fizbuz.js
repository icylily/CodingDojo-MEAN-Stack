function fizbuz(x){
    if (/^\+?(0|[1-9]\d*)$/.test(x) != true){
        result = "Parameter must be a positive number";
        return result
    }

    result = "";
    for (var i = 1; i<x; i ++){
        if (i%15==0){
            result +="FizzBuzz, ";
        }
        else if (i%3==0) {
            result += "fizz, ";
        }
        else if (i%5==0){
            result += "buzz, ";
        }
        else{
            result += String(i)+", "
        }

    }
    if (x % 15 == 0) {
        result += "and FizzBuzz. ";
    }
    else if (x % 3 == 0) {
        result += " and fizz. ";
    }
    else if (x % 5 == 0) {
        result += "and buzz. ";
    }
    else {
        result +="and "+ String(i) + ". "
    }
    return result
}

console.log(fizbuz(24));
console.log(fizbuz(15));
console.log (fizbuz("hello"));
