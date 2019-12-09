//The Function for checking the Marks with Grade System...
let getMyGrade = function(currentMark, totalMark){

    let myPercentage = (currentMark/totalMark) * 100

    let myGrade = ''
    if(myPercentage >= 90){
        myGrade = 'A+'
    }else if(myPercentage >= 80){
        myGrade = 'A'
    }else if(myPercentage >= 70){
        myGrade = 'B'
    }else if(myPercentage >= 60){
        myGrade = 'C'
    }else{
        myGrade = 'F'
    }

    return `Your Grade is ${myGrade} and Percentage is ${myPercentage}%`
}
//Calling Function..
console.log(getMyGrade(120, 200))

//Let me to create another new function for this one...
let getMyAnotherFunction = function(takefromUser){
        if(takefromUser %2== 0){
            return `${takefromUser} is Odd Number!`
        }else{
            return `${takefromUser} is Even Number!`
        }
}

//So lets calling this function..
var showUs =  getMyAnotherFunction(12)
console.log(showUs)
