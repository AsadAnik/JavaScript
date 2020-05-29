///Problem will solved when find differents between 2 arrays..
//Problem Array...
let arr1 = [1, 2, 3, 4];
let arr2 =  [3, 4, 5, 1];

///One Way To Solve...
function diff_array(arr1, arr2){
    let newArr = [];

    function checks_array(first, second){
        for(let i=0; i<first.length; i++){
            if(second.indexOf(first[i]) === -1){
                newArr.push(first[i]);
            }
        }
    }

   //Call Function for checking..
   checks_array(arr1, arr2);
   checks_array(arr2, arr1);
    
   return newArr;
}

 //Get Solution...
 let see_diff = diff_array(arr1, arr2);
 console.log('See 1st Solution Diff. -->> ', see_diff);

///2nd Way To Solve...
function diff_array_second(arr1, arr2){
    return arr1
           .concat(arr2)
           .filter(item => !arr1.includes(item) || !arr2.includes(item))
}

 //Get 2nd Solution...
 let see_2nd_diff = diff_array_second(arr1, arr2);
 console.log('See 2nd Solution Diff. -->> ', see_2nd_diff);

///3rd Way To Solve...
function diff_array_third(arr1, arr2){
    return [...diff(arr1, arr2), ...diff(arr2, arr1)];

    function diff(a1, a2){
        return a1.filter(item => a2.indexOf(item) === -1);
    }
}
 
 //Get 3rd Solution...
 let see_3rd_diff = diff_array_third(arr1, arr2);
 console.log('See 3rd Solution Diff. -->> ', see_3rd_diff);