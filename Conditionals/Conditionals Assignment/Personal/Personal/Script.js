// Conditionals personal

var age = prompt("What is your age?"); // prompting the user there age
var weight = prompt("What is your weight?"); // prompting the user there weight

if(age <= 18){ // if the user puts in age under 18 they are under age

    num ='You are under age!'
}
if (age >=18){ // if the user put in age over 18 they are old enough

    num ='You are old enough!'
}

if (weight <= 200){ // if the user puts in weight under 200 pounds they are a good weight

    lbs = 'You are a good weight'
}
if (weight >= 200){ // if the user puts in weight over 200 pounds they are overweight

    lbs = 'You are too heavy, Hit The Gym!'
}

console.log(num);
console.log(lbs);

