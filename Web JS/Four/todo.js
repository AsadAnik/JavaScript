var h = document.createElement('p');
var myValue = document.createTextNode('Hellow World');

h.appendChild(myValue);

document.querySelector('h1').appendChild(h); 

//Creating the while loop inner of there....
    var number = 5;

    while(number > 0){
        console.log(number);
        number--; 
    }