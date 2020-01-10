///The JSON interface inner here....
var text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';


    console.log('String is Converted to JSON: \n\n',JSON.parse(text),'\n');
    console.log('Without Converting the String: \n\n',text);


    console.log('\n\n');

  var anotherTxt = '{"employee" : ['+
  '{"firstPass": "@1211"},'+
  '{"secondPass": "aa1211"} ]}';
  
    console.log(anotherTxt);
    console.log(JSON.parse(anotherTxt),'\n');

//The JSON Arrays..
	let listJson = [
		{'Name': 'Asad', 'LastName': 'Anik'}, {'Age': 'Unknown'}, {'Passion': 'Software Engineer'}
	];

	console.log(listJson[0] ,listJson[2]);
    