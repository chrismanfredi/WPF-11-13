// Functions Personal

var assignment1 = parseInt(prompt("Assignment 1 grade"));
var assignment2 = parseInt(prompt("Assignment 2 grade"));
var assignment3 = parseInt(prompt("Assignment 3 grade"));
var assignment4 = parseInt(prompt("Assignment 4 grade"));

function gradeaverage(){
    var gradetotals=assignment1+assignment2+assignment3+assignment4;
    return gradetotals/4
}

console.log(gradeaverage());

