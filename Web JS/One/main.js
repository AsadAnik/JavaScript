/*The Javascript of Web JS | One*/
	alert('Welcome to my Page!');

//Selecting the elements inner of there..

	var p = document.querySelector('p');

	p.textContent = 'I am here';

	var pALL = document.querySelectorAll('p');

 //With the For Each loop...	
	pALL.forEach((p)=>{

		p.textContent = 'All Data HACKED!';
	});

 //The Selectors with the Javascript...	

	console.log(document.getElementById('secondOne'));
	console.log(document.getElementsByClassName('firstOne'));
	document.getElementById('secondOne').innerHTML = 'Somethings Differents!';


	console.log(document.querySelectorAll('p'));
	const allTag = document.querySelectorAll('p');
	console.log(allTag[1]);

	var idTouch = document.querySelector('#secondOne');
	var classTouch = document.querySelector('.firstOne');
	console.log(idTouch);	
	console.log(classTouch);


	