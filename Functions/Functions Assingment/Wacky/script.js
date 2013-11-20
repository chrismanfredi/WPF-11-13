// Can you get into the club

var year= prompt('Please enter the year you were born'); // prompting the user to enter the year they were born
var currentyear= 2013; // the current year "2013"

function agecheck(){ // function agecheck
    var age = currentyear-year; // variable age math of the problem current year - the year you were born

    if(year==''){
        return 'Please enter the year you were born!'
    }else if(year>currentyear){
        return 'Please enter a year that is not in the future'
    }else if(age<18){
        return 'your current age is '+age+', Leave Now! the club is not for you'
    }else{
        return 'your current age is '+age+', Come right in! and have a good time'
    }
} console.log(agecheck());

