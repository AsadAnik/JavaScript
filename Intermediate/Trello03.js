///The Trello version 3 in there....

const myTodos = ['Go to Gym', 'Doing Extra Other', 'Learn New']

console.log(myTodos.indexOf('Go to gym'))

//The Array with an Object.....
const newTodos = [{
    title : 'Go to Gym',
    isDone : false,
}, {
    title : 'Doing Extra Other',
    isDone : false,
}, {
    title : 'Learn New',
    isDone : true,
}]

const index = newTodos.findIndex(function(todo, index){
    console.log(todo)
    return todo.title === 'Go to Gym'
})

    console.log(index)

    const myList = ['Asad', 'Tiwali', 'Anik', 'Amit']

    var NumOne = myList.indexOf('Tiwali')
    var NumTwo = myList.indexOf('Anik')

    console.log(NumOne + NumTwo)

    ///The Objects Array....
    let ObjectArrayList = [ {
        name : 'Bill',
        Bio : 'Husband of Hokly'
    }, {
        name : 'Hokly',
        Bio : 'Wife of Bill'
    }, {
        name : 'Amit',
        Bio : 'Husband of Lara'
    }, {
        name : 'Lara',
        Bio : 'Wife of Amit'
    } ]

    console.log(`${ObjectArrayList[0].name} is ${ObjectArrayList[0].Bio}`)