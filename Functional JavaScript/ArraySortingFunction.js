///The Array list here...
var arr = [234, 120, 34, 54, 9, 10, 01, 23, 7,  12, 45, 90, 100, 345, 122]
///Default sorting....
arr.sort()
console.log(arr);

///Custom Sorting Ways....
arr.sort(function(a, b){
    return b-a;
})
console.log(arr)

//Another One to Sorting...
arr.sort(function(a, b){
    return a-b
})

console.log(arr)

//Examples with Object Array...
    const peoples = [
        { name: 'Asad Anik', age: 19 },
        { name: 'Alan Walker', age: 27 },
        { name: 'Jukar Bark', age: 33 },
        { name: 'John Doe', age: 46 },
        { name: 'Bill Gates', age: 56 }
    ]

    var peopleSortWithNumber = peoples.sort(function(a, b){
        return b.age - a.age
    })
    console.log(peopleSortWithNumber)
    
///Sorting with string value...\
    var peopleSortWithString = peoples.sort(function(a, b){
        if(a.name > b.name){
            return 1;
        }else if(a.name < b.name){
            return -1;
        }else{
            return 0;
        }
    })

    console.log(peopleSortWithString)