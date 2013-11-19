//Conditional Wacky

//Car Transporter

var bmw=prompt ("BMW Weight Ex. 3285"); // prompting the user to enter the BMW weight
var volvo=prompt ("Volvo Weight Ex. 3285"); // prompting the user to enter the Volvo weight
var lexus=prompt ("Lexus Weight Ex. 3285"); // prompting the user to enter the Lexus weight
var lamborghini=prompt ("Lamborghini Weight Ex. 3285"); // prompting the user to end the lamborghini weight
var maxweight = 20000; // max weight is set to 20000

var total = 20000 - bmw - volvo - lexus - lamborghini; // Math of the problem, adding all the car weights

if (total > maxweight){ // if the total weight of the cars is more then 20000
    //
    console.log("Your cars are too heavy for the truck!");
}
else{ // or if the cars aren't too heavy
    console.log("Your cars can fit on the truck");

}

console.log(); // console log weight




