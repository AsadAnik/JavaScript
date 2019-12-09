//Sorting non-ASCII charecters...
var myList = ['Acer', 'Asus', 'Asad', 'MacOS']

	myList.sort(function(a, b){
		return a.localeCompare(b)
	})

	console.log(myList)