//The Higher Order Function...
    let arr = ['Asad Anik', 'School', 'collage']

    arr.forEach((user) => {
        console.log(user)
    })

    var caller = function(){
        return function(a){
            return `I am ${a} for you!`;
        }
    }

    var x = caller()('asad')
    console.log(x)

//Another example...
    function doubleFunction(){
        return function(){
            console.log('I am double function inner of one function')
        }
    }    

    doubleFunction()()//Called the function...

//Examplee non_annonimus way...
    function remainder(value){
        return function(innerValue){
            console.log(value, innerValue)
        }
    }    

    var goodMorning = remainder('Good Morning')
    var goodAfternoon = remainder('Good Afternoon')

    goodMorning('ASad')
    goodAfternoon('ANik')

///Annonimus way to function..
///-------/*/*/*/------
    function remember(value){
        function ret(innerValue){
            console.log(`${value} and ${innerValue}`);
        }

        return ret;
    }    

    remember('Me')('Bill Gates')

    