
$('document').ready(function(){


//The Javascript framework for this way..
	alert('Connected JS!');
//Create the objects for contained the values of CSS...
	var header = {
		'background' : 'black',
		'position' : 'fixed',
		'color' : 'white',
		'text-decoration' : 'none',
		'font-size' : '20px',
		'font-family' : 'arial'
	};

	var section = {'margin-top' : '5%'};
	var p = {'font-family' : 'cursive'};


//The Scolling JS..
$(window).scroll(function(){

	$('header').css(header);
	$('section').css(section);
	$('p').css(p);

});//END of the scroller function..

});

