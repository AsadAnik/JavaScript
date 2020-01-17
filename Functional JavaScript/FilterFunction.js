///Filering without function...
    const arrayList = [5, 9, 3, 2, 1, 5, 7, 4]

    let newArrayList = []

    for(var i=0; i<arrayList.length; i++){
        if(arrayList[i] %2 == 1){
            newArrayList.push(arrayList[i])
        }
    }
  
  console.log(`Without filter but odd numbers : [${newArrayList}]`);
  
 //Filter with method...... 
    const arrayFiltering = arrayList.filter(function(value){
        return value %2 == 0;
    })

    console.log(`With filter function even numbers : [${arrayFiltering}]`);
    

//Filter with method and also CallBack function....
    function filterFunction(arrL, callBack){
        let newArray = []

        for(var i=0; i<arrL.length; i++){
            if(callBack(arrL[i])){
                newArray.push(arrL[i])
            } 
        }

        return newArray;
    }    

    let filteredOne = filterFunction(arrayList, function(value){
        // if(value %2== 0){
        //     return value;
        // }
        return value %2== 0;
    })

    console.log(filteredOne);
    