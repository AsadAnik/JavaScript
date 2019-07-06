///The Coercion of Javascript.....
    console.log('5' + 5)
    console.log('5' - 5)


 //The Arrow Function..   
    let myArrow = (num1, num2) => {
        num1 = parseInt(num1)
        return num1 + num2
    }

    console.log(myArrow('5', 5))

 //The Array Object...
    let ourMembers = [{
        name : 'Asad Anik',
        age : 19,
        roll : 12,
        class : '2nd Year',
        study : 'Collage',

    }, {
        name : 'Sarjia Riya',
        age : 16,
        roll : 20,
        class : 'SSC Ten',
        study : 'School',
    }]

    additionalOne = ourMembers[0].name +' + '+ ourMembers[1].name
    console.log(additionalOne)

    defferenceRoll = ourMembers[0].roll - ourMembers[1].roll
    console.log(defferenceRoll) 

    ageDifference = ourMembers[0].age - ourMembers[1].age
    console.log(`Age Difference about ${ageDifference} Years`)

  //Some Coercion Practice inner of there....
    const loginDetails = []
    const loginID = loginDetails[0]

    if(loginDetails){
        console.log('Allow User to define there')
    }else{
        console.log("User can't login here!")
    }


