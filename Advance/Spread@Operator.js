///The Spread Operator with the array...
 //The Arrow Function...
	var addNumber = (x, y, z) => (console.log(x + y + z))

 //Array.. 
	let nums = [3, 2, 1]

//Calling the function..
	addNumber(...nums)

//Adding inner of the array with Sread Operator...
	let boys = ['Asad', 'Anik', 'Hossain']
	let total = ['Bill', ...boys, 'Gates', 'Steven']

	console.log(total)


