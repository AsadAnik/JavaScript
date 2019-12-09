/*The Functions on JavaScript*/
let myFunction = function (name){
    console.log(`Hi ${name} Whats up!`)
}

myFunction('Hossain Sultan')

//Another Function to add two perameters & Return type..
let myAnotherFunc = function (firstName, lastName){
    result = firstName+' '+lastName
    return result
}

console.log(`My Full name is ${myAnotherFunc('Asad', 'Anik')}`)

//Other Way to define the function and with numbers...
function addNumber(num1, num2){
    resultNum = num1+num2
    return resultNum
}

console.log(addNumber(11, 21))