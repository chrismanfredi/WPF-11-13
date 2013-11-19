// Conditionals Industry

// Can you guess my job?

myjob = "web designer"; // This is the answer to the problem
var job = prompt("What is my job"); // prompt what is my job

if (job ==null || job ==""){ // if the user doesnt put in a answer a box will pop up

    alert("Alteast put something!"); // Alert pop up box
}
else if (job == myjob) // if the answer is right the user will put web designer
{
    console.log("You guessed my job!"); // console log you guessed my job!
}
else {
    console.log("WRONGGGG!"); // console long WRONGGGG
}