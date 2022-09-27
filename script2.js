/* Edabit Problems
cubes(3) -> 27
cubes(5) -> 125
cubes(10) -> 1000 */

function cubes(a) {
    return a ** 3
}

//Given two arguments, return an array which contains these two arguments
/*makePair(1,2) -> [1,2]
makePair(51, 21) -> [51, 21]
makePair(512124, 215) -> [512124, 215] */

function makePair(num1, num2) {
    let arr = [num1, num2]
    return arr
};

function makePair(num1, num2) {
    return [num1, num2]
};

function addition(num1, num2) {
    return num1 + num2;
}

/* Add a constructor to this class. The constructor takes arguments for the name, sides, and sideLength properties.
Add a new method calcPerimeter() method to the class which calculates its perimeter(the length of the shape's outer edge) and logs the result to the console.
Give a new instance of the Shape class called square. ive it a name of square and a sideLength of 5.
Call your calcPerimeter() method on the instance
Create a new instance of Shape called triangle, with a name of triangle and sideLength of 3
Call triangle.calcPerimeter() */

class Shape {
    name;
    sides;
    sideLength;

    constructor(name, sides, sideLength) {
        this.name = name;
        this.side = sides;
        this.sideLength = sideLength;
    }
    calcPerimeter() {
        console.log(this.side * this.sideLength)
    }
}

let square = new Shape ('newSquare', 4, 5); 
square.calcPerimeter();

let triangle = new Shape ('newTriangle', 3, 3);
triangle.calcPerimeter();

//Write a function that returns the string "something" joined with a spcae " " and the given argument a
// giveMeSomething("is better than nothing") --> "something is better than nothing"

function giveMeSomething(a) {
    let text = "something ";
    return text.concat(a);
}

function giveMeSomething(a) {
    return "something" + " " + a;
}

/* A student learning JavaScript was trying tp make a function. His code should
concatenate a passed strig name with String "Edabit" and store it in a variable called result.
nameString("Mubashir") --> "MubashirEdabit" */

//concat name and "Edabit"
//store result in variable called result

function nameString(name) {
    var b = "Edabit";
    var result = name + b;
    return result;
}

//Create a function that takes a boolean variable flag and returns it as a string
//boolToString(true) --> "true"
//boolToString(false) --> "false"
function boolToString(flag) {
    return flag.toString();
}





