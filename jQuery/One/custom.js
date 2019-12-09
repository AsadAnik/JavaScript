alert('Connected!');

//The jQuery inner here....

 //Adding the text from html to JS...
	$('.text').html('Hello World!');

 //Image adding...	
	$('.text2').html('<img src="assets/code.jpg" alt="No Image Directory Found!" height="200" width="200">');

 //Showing HTML code with JS...
 	$('.text3').text('<img src="assets/code.jpg" alt="No Image Directory Found!">');

 //Append & Prepend...
 	$('#append').append('Appended This Element By JS!');
 	$('#prepend').prepend('Prepended That Element With JS!');

 //Hide the Body of HTML...
 	// $('body').hide();	

 //JS for hide and show..
 	// $('#hide').click(function(){

 	// 	$('.result').hide();
 	// });	

 	// $('#show').click(function(){

 	// 	$('.result').show();
 	// });
 //fadeOut/fadeIn function.. 
 	$('#hide').click(function(){

 		$('.result').fadeOut(1000);
 	});

 	$('#show').click(function(){

 		$('.result').fadeIn(1000);
 	});


 //fade just with one button with html...
 	$('#Toggle').click(function(){

 		$('#contentDiv').toggle(500);
 	});

 	$('#Toggle').click(function(){

 		$('#contentDiv').fadeToggle(500);
 	});

 	$('#Toggle').click(function(){

 		$('#contentDiv').slideToggle(500);
 	}); 



 //The Mouse Effects inner here... 	
 	$('#contentDiv').mouseleave(function(){

 		$(this).css({
 			'background' : 'red'
 		});
 	});

 	$('#contentDiv').mouseenter(function(){

 		$(this).css({
 			'background' : 'blue'
 		});
 	});

 //KeyUp effects for input text bar..
 	$('#txtPick').keyup(function(){

 		var inputValue = $('#txtPick').val();
 		$('.showTxt').text(inputValue);
 	});