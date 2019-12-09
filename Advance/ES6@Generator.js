///The Generator...
	function* simpleGenerator(){
		yield 'Apple';
		yield 'Orange';
		console.log('Ok, this is the line after Orange...');
		yield 'corn';
	}

	let simple = simpleGenerator();

	for(var i=1; i<4; i++){
		console.log(simple.next());
	}

	///The Another Generator function for our personal life...
	function* anothrGenerator()
	{
		var num1 = 12, num2 = 10;
		yield num1+num2;
	}


	let simple2 = anothrGenerator();

	console.log(simple2.next());	
