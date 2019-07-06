//The Validation with the Javascript...
//Tract input form...
	alert('Connected!');
document.querySelector('#myform').addEventListener('input', (even)=>{
		console.log(even.target.value);
});

 //Form Checking the validation....
	document.querySelector('button').addEventListener('click', ()=>{
		let value = document.querySelector('#myform').value;

		if(isNaN(value) || value < 1 || value > 20){
			console.log('Not a Valid input!');
		}else{
			console.log('This input is okey!'); 
		}

	}, false);

 //Let the text into another place...
	document.querySelector('.text').addEventListener('click', ()=>{
		let takeValue = document.querySelector('#myform').value;
		document.querySelector('.text').innerHTML = takeValue;

	}, true);

 //Checking the odd or the even number from here...
 	document.querySelector('.check').addEventListener('click', ()=>{
 		let num = document.querySelector('#myform').value;

 		if(isNaN(num)){
 			console.log('Dined Number!');

 		}else if(num %2==0){
 			console.log('Odd Number!');

 		}else{
 			console.log('Even Number!');
 		}

 	}, false);

