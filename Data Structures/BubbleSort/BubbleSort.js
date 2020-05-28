///Data Structure and Algorithms Bubble Sort...
//Default unsorted values...
let arr_unsorted = [3, 0, 2, 5, -1, 4, 1];
console.log('Default values -->>.. ', arr_unsorted);

//After Sorting the values...
let bubbleAlign = bubble_sorted(arr_unsorted);
console.log('Sorted values --<<-->>--', bubbleAlign);

//Bubble Sorting Algorithms code..
function bubble_sorted(arr_unsorted){
    let len = arr_unsorted.length;
    let i, j, stop;

    for(i=0; i < len; i++){
        for(j=0, stop=len-i; j<stop; j++){
            if(arr_unsorted[j] > arr_unsorted[j + 1]){
                swapping(arr_unsorted, i, j+1);
            }
        }
    }

    return arr_unsorted;
}
//swapping the values of bubble_sorted function..
function swapping(array, first_Index, second_Index){
    let swap = array[first_Index];
    array[first_Index] = array[second_Index];
    array[second_Index] = swap;
}
