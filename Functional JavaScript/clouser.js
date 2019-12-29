///The global variable is the clouser....
var name = 'Asad Anik';

function myName(){
    console.log(name);
}

myName()//name variable is our clouser...

//Another example for clouser...
function windows(user){
    function osx(linux){
        console.log(`${user} are using the ${linux}`);
    }

    return osx;
}

windows('asadanik')('Windows 10Pro')//asadanik is our clouser...