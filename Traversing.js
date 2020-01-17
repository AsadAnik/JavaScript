let myList = [
    [1,2,3,4,5,6,7], [8,9,12,2,33,44,45,4, 0], [123,334,55,112,345,46,3345,234,]
];

//Traverse with classical way...
    var row = myList.length;

    for(let i=0; i<row; i++){
        let innerCells = myList[i].length
        console.log('\n'+i, [innerCells])
        
        for(let n=0; n<innerCells; n++){
            console.log(myList[i][n])
        }
    }

    console.log('\n\n Now with ES6...')

///Traversing with ES6 Standards...
    myList.forEach((items, index, list) => {
        console.log(index, [items.length])

        items.forEach((items2, index2, list2) => {
            console.log(items2)
        })
    })    