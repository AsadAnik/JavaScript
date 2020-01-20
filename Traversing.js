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
    
    console.log('\n')

///Traversing with Object list..
    let myObj = {
        objList: [
            {name: 'Asad Anik', age: 19}, 
            {name: 'Alex Jecson', age: 22}, 
            {name: 'Morin Lera', age: 17}
        ]
    }
    
    var createObj = myObj.objList;

    for(let i=0; i<createObj.length; i++){
        for(let props in createObj){
            console.log(props, createObj[props].name, createObj[props].age)
        }
    }

  console.log('\nWith ES6 Standard...')  
   //Now with forEach function...
    createObj.forEach((items, index, list) => {
        console.log(index, items.name, items.age)
    }) 
    
//Traversing with letters in the list....
    let poem = 'I am a good boy with my good coding engle pc!';

    let travelledPoem = poem.split(/\W+/)//To Divide the words themselfs...
    console.log(travelledPoem.filter((x) => (x.length > 3)))