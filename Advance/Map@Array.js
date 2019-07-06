//The Map with the array...
let list = ['asad is here', '', 12, function(){}, false]

	const ourMap = new Map()

//The Setter method of map...
	ourMap.set(list[0], 'The 1st Value')
	ourMap.set(list[1], 'The 2nd Value')
	ourMap.set(list[2], 'The 3rd Value')
	ourMap.set(list[3], 'Our Funtion')
	ourMap.set(list[4], 'Boolean Here')

	ourMap.size

//The Getter method of map...
	ourMap.get(list[0])
	ourMap.get(list[1])
	ourMap.get(list[2])
	ourMap.get(list[3])	
	ourMap.get(list[4])	

	console.log(ourMap)

//Using the NaN as Map Key...
	const anotherMap = new Map()

	anotherMap.set(NaN, 'Not a Number!')
	anotherMap.get(NaN)	

	var otherNaN = Number('foo')
	anotherMap.get(otherNaN)

	console.log(anotherMap)
	console.log(otherNaN)
