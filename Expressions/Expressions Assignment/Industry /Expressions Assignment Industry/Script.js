var FoodShoppingarray = []; // Created the variable FoodShoppingarray
FoodShoppingarray[0] = prompt ("Enter the cost of the first food item"); // Prompting the user to "Enter the cost of the first food item"
FoodShoppingarray[1] = prompt ("Enter the cost of the second food item"); // Prompting the user to "Enter the cost of the second food item"
FoodShoppingarray[2] = prompt ("Enter the cost of the third food item"); // Prompting the user to "Enter the cost of the third food item"
FoodShoppingarray[3] = prompt ("Enter the cost of the forth food item"); // Prompting the user to "Enter the cost of the fourth food item"

var spendinglimit = prompt("How much money can you spend on food?"); // Prompting the user on how much they can spend on food

var total = FoodShoppingarray[0] + FoodShoppingarray[1] + FoodShoppingarray[2] + FoodShoppingarray[3]; // Adding all the FoodShoppingarray's to get a total on the food

if (total < spendinglimit){
    console.log("you can buy the food!")

}

else if (total > spendinglimit){
    console.log("You can NOT buy the food!")

}








