var FoodShopping = [];
FoodShopping[0] = prompt ("Enter cost of the first food item");
FoodShopping[1] = prompt ("Enter cost of the second food item");
FoodShopping[2] = prompt ("Enter cost of the second food item");
FoodShopping[3] = prompt ("Enter cost of the second food item");

var spendinglimit = prompt("How much money can you spend on food?");

var total = FoodShopping[0] + FoodShopping[1] + FoodShopping[2] + FoodShopping[3];

if (total < spendinglimit){
    console.log("you can buy the food!")

}

else{
    console.log("You")

}







