function grass(a,b,c){ // created function grass

    var grass1 = a + b +c; // created variable grass1
    return grass1; // return grass1
}

function landscape(x,y){ // created function landscape

    var land1 = x * y; // created variable land1

    return land1; // return land1

}


var perhouse= parseInt(prompt('Enter how much you make per house')); // varibale perhouse prompting the user to enter a value
var week1= parseInt(prompt('Please enter how many hours you worked week 1')); // variable week1 prompting the user to enter how much they worked
var week2= parseInt(prompt('Please enter how many hours you worked week 2')); // variable week2 prompting the user to enter how much they worked
var week3= parseInt(prompt('Please enter how many hours you worked week 3')); // variable week3 prompting the user to enter how much they worked

var grasscall = grass(week1, week2, week3); // variable grasscall

var grassfinal = landscape(grasscall, perhouse); // variable grassfinal

console.log("Over the 3 weeks you worked a total of " + grasscall + " hours, and made a total of " + grassfinal + " Dollars!"); // console log






