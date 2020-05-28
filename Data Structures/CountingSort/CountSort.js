///Counting Sort Algorithm's code here..
function count_sort(arr, min, max){
    let i;
    let Y = 0;
    let count = [];

    for(i = min; i <= max; i++){
        count[i] = 0;
    }

    for(i = 0; i <= arr.length; i++){
        count[arr[i]]++
    }

    for(i = min; i <= max; i++){
        while(count[i]-- > 0){
            arr[Y++] = i;
        }
    }

    return arr;
}


///Default items...
let min = 0;
let max = 5;
let arr = [3, 0, 2, 5, 4, 1];
console.log('Before Sort.......', arr);

//After Sorting...
let letUsSort = count_sort(arr, min, max);
console.log('After Sort--------', letUsSort);