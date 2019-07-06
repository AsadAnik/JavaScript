/*Condition check with the Logic*/
let isVarified = false
let isLoggedIn = true
let hasPaymentToken = true
let isGuest = false

//Just for condition checking...
if(isVarified && isLoggedIn && hasPaymentToken){
    console.log('Great Access here, All Right!')
}else if(isVarified || isGuest){
    console.log('Allow free and For Guest!')
}else{
    console.log('NOTE : Please contact Admin Now!')
}
/*OR*/
//The another condition on here....
let username = true
let password = false
let email = true

    if(username && password && email == true){
        console.log("Welcome To Your Account! Sir")
    }else{
        console.log("Sorry Sir We can't accept You now!")
    }