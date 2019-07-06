//The Javascript validation another one..
		alert('CONNECTED validation!');

	//The Click Event Here...
		document.getElementById('submit').addEventListener('click', validationArea, false);


		function validationArea(){

		//For Default Area of browser loading....	
			event.preventDefault();

		//All Selectors..	
			var username = document.querySelector('.one').value;
			var realname = document.querySelector('.two').value;
			var password = document.querySelector('.three').value;
			var repass = document.querySelector('.four').value;

			//some attention for some errors..
			 //Spans...
			 	var passError = document.querySelector('.passError').textContent;
			 	var repassError = document.querySelector('.repassError').textContent;

			 	if(username === '' || realname === '' || password === '' || repass === ''){
			 		alert('Somethings Empty!');
			 	}else if(username.length < 4 || realname < 5){
			 		alert('Username Or Realname should be over 4 digit!');
			 		return false;
			 	}else if(password.length < 8){
			 		alert('Password should be over 7 digit!');
			 		return false;
			 	}else if(password != repass){
			 		alert('Password is not matching!');
			 		console.log('Password Error!');
			 		return false;
			 	}

			console.log('The User Name is : ', username, realname);
		    console.log('Password is : ', password);

		    return true;
		}