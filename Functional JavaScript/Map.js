///Map with normal JS...
    const arrayList = [5, 9, 3, 2, 1, 5, 7, 4]

    var newArray = []
    for(var i=0; i<arrayList.length; i++){
        newArray.push(arrayList[i] + 2)
    }

    console.log(newArray)

///Control with Map builtIn function...
    var withAnotherStyle = arrayList.map(function(values){
        return values+=2;
    })    

    console.log(withAnotherStyle)//Accept same result..

///Now Build with Functional programming and with arrow function in use in...
    const anotherArray = [2, 4, 45, 7, 77, 5, 8 , 1, 0]

    function makeMap(giveList, innerFunction){
        let array = []

        for(let i=0; i<giveList.length; i++){
           array.push(innerFunction(giveList[i]))
        }

        return array;
    }

    var makeUp = makeMap(arrayList, (items) => {return items+=2})

    console.log(makeUp)