// 1). A Function can be stored in a Variable...
    function sayName(name){
        return `Hello ${name}`;
    }

    var callFunctionName = sayName;
    var callFunction = sayName();

    console.log(callFunctionName);
    console.log(callFunction);

  //Changing the function value with functions name refer...
    var hello = callFunctionName('Asad ANik!')
    console.log(hello);
    
// 2). A Function can be stored as an Array...
    var arr = [1, 2, 3, 4, sayName];
    arr.push(hello);
    console.log(arr);

// 3). A Function can be stored as an Object Field or Property...
    let person = {
        name: 'Asad Anik',
        sayName: hello,
        otherName: function(){
            return `Hi I am not another I am ${this.sayName}`;
        }
    }

    console.log(person.sayName);
    console.log(person.otherName());
    
// 4). We can create Function as needed....
///Example with Self_Involking Function..
    var sum = 10 + (function(){ return 90 })();
    var sum2 = 10 + (() => { return 90 })();
    console.log(sum, sum2);

// 5). We can pass Function as an Arguments...
///Example with CallBackFunction..
    function wow(name, fun){
        return fun(name);
    }

    console.log(wow('Alan Walker', sayName))//Passed the old function as a argument..

// 6). We can return Function from another Function...
    function base(b){
        return function(n){
            var result = 1;

            for(var i=0; i<b; i++){
                result *= n;
            }

            return result;
        }
    }

    var power = base(2);
    var result = power(9);
  //another way..
    var anotherResult = base(2)(9);  
    console.log(result, anotherResult);