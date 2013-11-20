function gradeAverage(q,w,e,r){

    var gpa = q + w + e + r;

    return gpa;
}

function divide(a,b){

    var div = a / b;

    return div;
}

var test1 = parseInt(prompt('Assignment grade 1'));
var test2 = parseInt(prompt('Assignment grade 2'));
var test3 = parseInt(prompt('Assignment grade 3'));
var test4 = parseInt(prompt('Assignment grade 4'));

var added = gradeAverage(test1, test2, test3, test4);

var testAmt = 4;
var wholeaverage = divide(added, testAmt);

if (wholeaverage < 70){

    x = "You fail!"
}
else {x="you pass!"}

console.log(wholeaverage);
console.log(x);




