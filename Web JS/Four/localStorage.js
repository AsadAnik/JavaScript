//The Javascript local storage inner of this file...
alert('Connected localStorage!');
localStorage.setItem('hero', 'thor');
localStorage.setItem('todo', 'take an ice cream')

var myHero = localStorage.getItem('hero');

	console.log(myHero);
	console.log(localStorage.getItem('todo'));

//Delete Items from localstorage...
	localStorage.removeItem('hero');

//To Delete All..	
	// localStorage.clear();

	myHero = localStorage.getItem('hero');
	console.log(myHero);	

//Add new one for localStorage inner here...
	localStorage.setItem('wife', 'Gomez');
	localStorage.setItem('husband', 'Alex');
	
	var getWife = localStorage.getItem('wife');
	var getHusband = localStorage.getItem('husband');

	console.log(getWife+' + '+ getHusband);