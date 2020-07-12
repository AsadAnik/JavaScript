//now working with the Spread operators and with rest operators...
///The Rest Operators...
function weNeedRestArr(...rest){
    return rest.reduce((a, b) => {
        return a + b;
    })
}

//Called the function and given the value..
let createdFunction = weNeedRestArr(1, 2, 3, 4);
console.log(createdFunction)

///The Spread operators..
let theFullObj = {
  username: 'asadanik',
  password: 'unknown',
  age: 20
}

let anotherObj = {
  ...theFullObj,
  username: 'anotherone',
  age: 18
}

console.log(anotherObj)

