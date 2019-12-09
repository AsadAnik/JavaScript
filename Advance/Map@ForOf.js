///ForOf loop with the Map...
		var myMap = new Map()

		myMap.set(0, 'zero')
		myMap.set(1, 'one')

		console.log(myMap)

		for(var [key, value] of myMap){
			console.log(key + '=' + value)
		}

	//For Keys...
		for(var key of myMap.keys()){
			console.log('Keys : ',key)
		}	
	//For Values...
		for(var values of myMap.values()){
			console.log('Values : ',values)
		}
	//To entries..
		for(var [key, value] of myMap.entries()){
			console.log(key + '=' + value)
		}