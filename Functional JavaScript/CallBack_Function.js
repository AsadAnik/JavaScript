///The Javascript callBack function inner here...

const hello = function(user, print){
    print(user)
}

hello('Asad Anik', function(user){

    console.log(`Hello ${user}`)
})


//With Object and CallBack Function...
const me = {
    name: 'MD. Asad Mojumder',
    age: 20,
    email: 's.engineer63@gmail.com'
}

function printMyThings(person, callBack){
    console.log(`Name is ${person.name} and age is ${person.age}`)

    if(person.age >= 18){
        callBack(person.email)
    }else{
        console.log('You are so little boy...')
    }
}

printMyThings(me, function(email){
     console.log(`Email sent to ${email}`)
})

//Another Example...
    function print(data, callback1, callback2){
        console.log(`Original Data is here :${data}`)
        callback1(data)
        callback2(data)
    }

    print('RealTime Data', function(data){
        console.log(`callback1 data : ${data.toUpperCase()}`)

    }, function(data){
        console.log(`callback2 data : ${data.toLowerCase()}`)
    })

    