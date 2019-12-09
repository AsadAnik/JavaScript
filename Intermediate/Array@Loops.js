//(Trello) Lists for Days..
const Days = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']

console.log(Days.length -2)

	for(let i=Days.length -1; i>=0; i--){
		const joint = Days[i]
		console.log(joint)
	}
	console.log('\n')

//The Revarse number...
var numbersForRevarse = [1,2,3,4,5,6,7,8,9,0]


numbersForRevarse[1] = 'Hacked Number!'


console.log("There is our array list : ")
	for(let i=0; i<numbersForRevarse.length; i++){
		console.log(numbersForRevarse[i])
	}
	console.log('\n')

//Pushing the value and List Items....
let ToDos = []

ToDos.push('OnePush')
ToDos.push('TwoPush')
ToDos.push('ThreePush')

for(let i=0; i<=ToDos.length -1; i++){
	console.log(`Index of No.${i + 1} is ${ToDos[i]}`)
}
console.log('\n')

//Another loop inner of there...
const otherList = []

otherList.push('Anik')
otherList.push('Amit')
otherList.push('Asad')

otherList.forEach(function(todo, index){
	console.log(`Your Task No.${index + 1} is : ${todo}`)
})










