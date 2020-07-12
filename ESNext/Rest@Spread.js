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

///Destructuring, Spreading & Resting Example Togather One Example..
//Make function to remove first two elements of an Array...
//The Function takes data and make array with that help of Rest...
function removeFirstTwoElement(...list){
  const [first, second, ...extention] = list;
  return extention;
}

///calling the function and say to do something...
const arr = removeFirstTwoElement(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//Showing Results...
console.log(`source : ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}`);
console.log(`arr : ${arr}`);