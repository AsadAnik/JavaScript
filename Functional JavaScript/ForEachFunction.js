///The ForEach Function here...
var arr = [5, 6, 9, 10, 7, 0, 1, 2, 4]

arr.forEach(function(element, index, arr){
    console.log(`Element is : ${element} index  is : ${index} array is : ${arr}`);
})

    console.log('\n')//Try for newLine...
    

///Trying Same things with FunctionalJS way...
function loop(arrayList, callback){
    for(var i=0; i<arrayList.length; i++){
        callback(arrayList[i], i)
    }
}

loop(arr, function(element, index){
    console.log(`${element} is element and ${index} is the index`)
})