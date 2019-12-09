///This is the javascripts arrow functions inner of there...
const seyHello = function(name){
    return `Hey ${name}, whats up!`
}

console.log(seyHello('Anik'))

///Convert to the arrow function...
    const arrowFunc = (name) => {
        return `Hey ${name}, there I'm!`
    }

    console.log(arrowFunc('Asad'))

//One Object Array....
    let myObjArray = [{
        title : 'ProgrammingTime',
        isDone : false
    }, {
        title : 'FamilyTime',
        isDone : true
    }, {
        title : 'FriendsTime',
        isDone : false
    }, {
        title : 'GymTime',
        isDone : true
    }]    

    const thingsDone = myObjArray.filter((todo) => {
        return todo.isDone === false
    })

    console.log(thingsDone)

//This.Function with One line complete...
    const DoneItem = myObjArray.filter((todo) => todo.isDone === true)    

    console.log(DoneItem)


///One Simple example of this arrow function...    
    var myAddionalOne = (num1, num2) => num1+num2
    console.log()
