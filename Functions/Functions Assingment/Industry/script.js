function grass(a,b,c){

    var grass1 = a * b * c;
    return grass1;
}

function industry(x,y){

    var land1 = x * y;

    return land1;

}


var perhouse= prompt("Enter how much you make per house");
var week1= prompt("Please enter how many hours you worked week 1");
var week2= prompt("Please enter how many hours you worked week 2");
var week3= prompt("Please enter how many hours you worked week 3");

var grasscall = grass(week1, week2, week3);

var grassfinal = landscape(grasscall, perhouse);




