//The Default Variable functions..
    function multiPlayer(num1, num2){
        return num1*num2
    }

    console.log(multiPlayer(25, 20))

//Default Variable Function...
    function DefaultFunction(name = 'John Doe', age = 35){
        return `My name is ${name}, I am ${age} years old.`
    }    

    console.log(DefaultFunction())

//Define the Weather with Function....
	function toCelsius(fahrenheit){
		return (5/9) * (fahrenheit - 32)
	}    

	console.log("Celsius scale is : "+toCelsius(77))
