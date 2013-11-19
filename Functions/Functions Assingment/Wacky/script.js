function Laptime(l1,l2,l3,l4,l5){

    var total = l1 + l2 +l3 +l4 +l5;

    return total;
}

var lap1 = parseInt(prompt('First mile time'));
var lap2 = parseInt(prompt('Second mile time'));
var lap3 = parseInt(prompt('Third mile time'));
var lap4 = parseInt(prompt('Forth mile time'));

Laptime =  (lap1 + lap2 + lap3 + lap4);

if (Laptime < 40 ){

    x = 'your a good runner!'
}
else {x = 'You suck!'}

console.log(Laptime);

 console.log(x);
