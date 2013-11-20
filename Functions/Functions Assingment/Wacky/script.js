// Can you get into the club

var year= prompt('Please enter the year you were born');
var currentyear= 2013;

function agecheck(){
    var age = currentyear-year;

    if(year==''){
        return 'Please enter the year you were born!'
    }else if(year>currentyear){
        return 'Please enter a year that is not in the future'
    }else if(age<18){
        return 'your current age is '+age+', Leave Now! the club is not for you'
    }else{
        return 'your current age is '+age+',Come right in! and have a good time'
    }
} console.log(agecheck());

