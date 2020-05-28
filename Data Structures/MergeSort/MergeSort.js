///Merging with 2Array in One also sorted data...
function merge_sort(left, right){
    let i = 0;
    let j = 0;
    let newArray = [];

    while(i < left.length || j < right.length){
        if(i === left.length){
            newArray.push(right[j]);
            j++;

        }else if(j === right.length || left[i] <= right[j]){
            newArray.push(left[i]);
            i++;

        }else{
            newArray.push(right[j]);
            j++;
        }
    }

    return newArray;
}

///2 Different Array...
let left_array = [3, 2, 4];
let right_array = [5, 6, 7];

///Keep on Merge Function...
let sorted = merge_sort(left_array, right_array);
console.log(sorted);