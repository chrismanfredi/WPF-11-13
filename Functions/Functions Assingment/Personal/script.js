function gradeAverage(q,w,e,r){ // created function grade average

    var gpa = q + w + e + r; // created variable gpa and adding q w e r

    return gpa; // return variable gpa
}

function divide(a,b){ // created function divide

    var div = a / b; // created variable div and dividing a and b

    return div; // return variable div
}

var test1 = parseInt(prompt('Assignment grade 1')); // prompting the user to enter assignment grade 1
var test2 = parseInt(prompt('Assignment grade 2')); // prompting the user to enter assignment grade 2
var test3 = parseInt(prompt('Assignment grade 3')); // prompting the user to enter assignment grade 3
var test4 = parseInt(prompt('Assignment grade 4')); // prompting the user to enter assignment grade 4

var added = gradeAverage(test1, test2, test3, test4); // math of the problem adding all the test grades

var testAmt = 4; // creating variable test Amt to divide the test scores by 4
var wholeaverage = divide(added, testAmt); // creating variable whole average which divides the added variable and the test scores

if (wholeaverage < 70){ // if the whole average is less then 70

    x = "You fail!" // you fail!
}
else {x="you pass!"} // or you pass!

console.log(wholeaverage); // console log "whole average"
console.log(x); // console log "x"




