myjob = "web designer"; // Plugging in the answer to my favorite color
var job = prompt("What is my job?"); // Asking user to guess a color

if (job ==null || job =="") // If user inputs nothing a message pops up
{
    alert("Atleast put something!"); // This is the message the user will see if they don't input anything
}
else if (job === myjob) // If the color guessed equals to my favorite color
{
    console.log("You guess my job!"); // Message sent if answered correctly
}
else {
    console.log("WRONGGGG!"); // Message sent if answered wrongly
}




