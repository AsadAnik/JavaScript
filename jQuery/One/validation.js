//The Validation with the jQuery(Javascript framework)...
	$('#actionForm').submit(function(){//Function for form validation..

		var username = $('.inOne').val();
		var password = $('.inTwo').val();

		if(username == '' || password == ''){//Condition...
			$('.answer').html('Empty!');

		}else if(username.length < 4 || password.length < 8){
			$('.answer').html('Username should be 4 digit and pass should be 8 digit!');
		}else{
			$('.answer').html('Submitted Successfully!');
		}


		return false;
	});//END of this function for the form validation...


 //The Functions for input areas standards...
	$('.inOne').focus(function(){

		$(this).after('<p class="required">Please Enter Your Username</p>');
	});

	$('.inOne').blur(function(){

		$('.required').hide();
	});

	$('.inTwo').focus(function(){

		$(this).after('<p class="required2">Please Enter Your Password</p>');
	});

	$('.inTwo').blur(function(){

		$('.required2').hide();
	});