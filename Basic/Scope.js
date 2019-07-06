/*
    var keyword for local & global variable scope can access this one.
    But let keyword for just inner of scope & can't call outside of scope.
*/
let globarVariable = 'I am Global Variable!'

if(true){
    var localVariable = 'I am Local Now!'
    console.log(localVariable)
}

console.log(localVariable)

/*Another one for the real practice inner of here*/
var num1 = 12

if(true){
    var num2 = 13
    let num3 = 11
    console.log(num2)
    console.log(num3)
}
console.log(num1)
console.log(num2)

//Other one for with the Good practice innner of here....
let asad = 19
let anik = 17

if(true){
    asad = 20
    let anik = 10
    console.log("Default Asad Name : "+asad)
    console.log("Default Anik Name : "+anik)
}

//console for thoes area....
console.log("This is last One Asad : "+asad)
console.log("This is another one Anik : "+anik)

//The Nasted Scope for Understanding more about!!!
let IAmGlobal = 'Now Global'

    if(true){
         IAmGlobal = 'Now Local'

         if(true){
             IAmGlobal = 'Nested Local'

             if(true){
                 IAmGlobal ='Double Nested Local'
                 console.log(IAmGlobal)
             }
         }
    }
    console.log(IAmGlobal)
