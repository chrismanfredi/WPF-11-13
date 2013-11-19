//Conditional Wacky

//Car Transporter

var maxweight = 20000; // variable max weight is set to 20,000
var bmw = prompt ("BMW Weight Ex. 3285"); // prompting the user to enter how much the bmw weighs
var volvo = prompt ("Volov Weight Ex. 3345"); // prompting the user to enter how much the volvo weighs
var lexus = prompt ("Lexus Weight Ex. 3456"); // prompting the user to enter how much the lexus weighs
var lamborghini = prompt ("Lamborghini Weight Ex. 3476");

var total = bmw+volvo+lexus+lamborghini;

if (total > maxweight){
    //
   console.log("Your cars are too heavy for the truck!");
}
else{
    console.log("Your cars can fit on the truck");

}

console.log(total);




