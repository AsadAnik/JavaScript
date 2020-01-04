///With Normal Scence.....
    let arrayList = [5, 6, 7, 8, 1, 2, 3, 4 ,9]

    var sum = 0;
    for(var i=0; i<arrayList.length; i++){
        sum+=arrayList[i];
    }

    console.log(sum)

//With Reduce Function...
    var newResult = arrayList.reduce((num1, num2) => {
        return num1+num2;
    })

    console.log(newResult)
    