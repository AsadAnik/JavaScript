///The some example of shorting the array of there...
	var numberArray = [40, 1, 70, 3, 2]
	var stringArray = ['Asad', 'Anik', 'Alien', 'Ghost']
	var numaricStringArray = ['34', '23', '700', '700.0']
	var mixedNumaricArray = ['12', '80', '40', '3', 2, 1, 88, 11]


 //A Function for comparing the 2numbers....
	function compares(a, b){
		return a-b
	}


 //String array sorted...	
	console.log('StringArray : ',stringArray.join())
	console.log('Sorted : ',stringArray.sort())

	console.log('\n')
 //Number array sorted...
	console.log('Number Array : ',numberArray.join())
	console.log('Sorted : ',numberArray.sort())
	console.log('Sorted with Compare number : ',numberArray.sort(compares))

	console.log('\n')
 //Number String array sorted...
	console.log('Numarical String Array : ',numaricStringArray.join())
	console.log('Sorted : ',numaricStringArray.sort())
	console.log('Sorted with Compare number : ',numaricStringArray.sort(compares))

	console.log('\n')
 //Mix array sorted...
	console.log('Mix Numarical Array : ',mixedNumaricArray.join())
	console.log('Sorted : ',mixedNumaricArray.sort())
	console.log('Sorted with Compare number : ',mixedNumaricArray.sort(compares))


