//The Dice of javascript....
let num1 = 22
let num2 = 7

result = num1 / num2

console.log("With Default : ",result)
console.log("With toFixed() method : ",result.toFixed())
console.log("With toFixed(2) method : ",result.toFixed(2))
console.log("With Math.floor(_) method : ",Math.floor(result))
console.log("With Math.ceil(_) method : ",Math.ceil(result))
console.log("With Math.random() method : ",Math.random() * 10)

//Another one for checking the random one...
    let upperOne = 20
    let lowerOne = 10

    console.log(Math.floor(Math.random() * upperOne - lowerOne + 1) + lowerOne)
    

//Some small practice for us todo...

    let someOne = 12
    let someTwo = 10

    let sum1 = Math.floor(someOne / someTwo)
    let sum2 = someOne / someTwo

    console.log(Math.random(someOne * someTwo))
    console.log(sum1)
    console.log(sum2)

//Some another practice inner here...
    let numberOne = 1211
    let numberTwo = 1121
    
    console.log(Math.floor(Math.random() * numberOne - numberTwo))
    
    
