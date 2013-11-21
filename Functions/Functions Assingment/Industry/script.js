function grass(a,b,c){ // created function grass

    var grass1 = a + b +c; // created variable grass1
    return grass1; // return grass1
}

function landscape(x,y){ // created function landscape

    var land1 = x * y;

    return land1;

}


var perhouse= parseInt(prompt('Enter how much you make per house'));
var week1= parseInt(prompt('Please enter how many hours you worked week 1'));
var week2= parseInt(prompt('Please enter how many hours you worked week 2'));
var week3= parseInt(prompt('Please enter how many hours you worked week 3'));

var grasscall = grass(week1, week2, week3);

var grassfinal = landscape(grasscall, perhouse);

console.log(grassfinal);

console.log("Over the 3 weeks you worked a total of " + grasscall + " hours, and made a total of " + grassfinal + " Dollars!");






