//The Maps loop on the javascript....

let King = {
	name : 'Lorem Adam',
	age : 28,
	isActive : true
}

let Queen = {
	name : 'Jenny Bean',
	age : 25,
	isActive : true
}

let Prince = {
	name : 'Libre Bean Adam',
	age : 0.5,
	isActive : false
}

 //The Map....
	let users = new Map()

	users.set('King', King)
	users.set('Queen', Queen)
	users.set('Prince', Prince)

	console.log(users)
	console.log(users.size)
	console.log(users.get('King'))
	console.log(users.keys())
	console.log(users.values())

	console.log('\n')//Next Line....

 //The For Of loop...
 	for(const given of users.values()){
 			console.log(given.name)
 	}

 	console.log('\n')//Next Line...

 	for(const [key, value] of users.entries()){
 			console.log(key+' = '+value.name)

 	}

 //With For Each loop...
 	users.forEach((value, key) => console.log(key+' = '+value.name))


	console.log('\n')//Next Line......

///Another Way of the Map and Array....
	var arrOfarr = [['One', 1], ['Two', 2], ['Three', 3]]

	var newMap = new Map(arrOfarr)//Created the Object...

	console.log(newMap)

