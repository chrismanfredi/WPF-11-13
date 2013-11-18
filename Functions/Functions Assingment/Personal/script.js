// Functions Personal

var assignment1 = parseInt(prompt("Assignment 1 grade")); // create var assignment 1 and prompting the user to enter the grade
var assignment2 = parseInt(prompt("Assignment 2 grade")); // create var assignment 2 and prompting the user to enter the grade
var assignment3 = parseInt(prompt("Assignment 3 grade")); // create var assignment 3 and prompting the user to enter the grade
var assignment4 = parseInt(prompt("Assignment 4 grade")); // create var assignment 4 and prompting the user to enter the grade

function gradeaverage(){ // function grade average
    var gradetotals=assignment1+assignment2+assignment3+assignment4; // variable grade totals and adding all the assignment grades
    return gradetotals/4
} // returning what the user put in for grade totals divided by 4 to find the average

console.log(gradeaverage());

