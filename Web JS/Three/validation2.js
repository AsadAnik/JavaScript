	//Checking the Connections....
		alert('CONNECTED validation2!');

	document.querySelector('.form').addEventListener('submit', (event)=>{
		//For not to reload...	
			event.preventDefault();

		//take all the input..
			var username = event.target.username.value;
			var realname = event.target.realname.value;	
			var password = event.target.password.value;
			var repass = event.target.repass.value;

			var passError = document.querySelector('.passError').textContent;
			var repassError = document.querySelector('.repassError').textContent;

			console.log(username);
			console.log(realname);


		//Condition just for the Password of input area..	
			if(password.length < 5 || repass.length < 5){
				passError = 'Length Error!';
			}else if(password === repass){
				console.log('Submit Successfully!');
				alert('Submit Successfully!');
			}else{
				repassError = 'Password Matching Error!';
			}

			username = '';
			realname = '';

	}, false);