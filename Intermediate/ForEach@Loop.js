/*The For Each Loop with this TrelloJS*/
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat']

//The For Each loop..
days.forEach(function(days, num){
    console.log('This is ForEach Loop : ',num+1," day is : ",days)
})

console.log('\n')

//Same thing we are done with For loop with Standard!...
    for(let i=0; i<days.length; i++){
        console.log(`This is For Loop : ${i+1} day is ${days[i]}`)
    }

 //Another Example of the for Each loop inner of javascript..
 	let persons = ['Asad', 'Anik', 'Tanzid', 'Tuhin', 'Alaul', 'Noman', 'Kawser', 'Munna']

 	persons.forEach(function(items, index, array){
 		if(items === 'Tuhin'){
 			items = items.toUpperCase()
 		}else{
 			items = items.toLowerCase()
 		}

 		console.log([index + 1], items)
 	})
