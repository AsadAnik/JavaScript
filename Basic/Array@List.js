/*The Array list and Index Numbers Experience*/
const marvelHeros = ['spiderMan', 'batMan', 'superMan', 'ironMan', 'captainAmerica', 'thor']

console.log(marvelHeros)
console.log("Type of this one : "+typeof marvelHeros)
console.log("The First Hero Of Marvel : "+marvelHeros[0])
console.log("The Second Hero Of Marvel : "+marvelHeros[1])
console.log("2nd One with another way : "+marvelHeros[marvelHeros.length -1])
console.log(`We have ${marvelHeros.length} super heroes`)
console.log("After One Remove then : "+[marvelHeros.length -1])

//To Remove First element from list and add [shift/unshift].....
let insideBox = ['One', 'Two', 'Three', 'Four', 'Five', 'Six']

insideBox.shift(insideBox[1])
insideBox.unshift(insideBox[4])

console.log(insideBox)

//To Remove Last elment from list and add [pop/push].....
let numbers = [1,2,3,4,5,6,7,8,9,0]

console.log(`We removed ${numbers.pop()} from list`)
numbers.push(10)
console.log(numbers)

//Splice for Middle numbers from list and add [splice]....
let elements = ['html', 'css', 'javascript', 'python', 'php','reactNative','mySql']

elements.splice(2, de2, 'JS_HACKED','PY_HACKED')
console.log(elements)
