///Insertion_Sorting Algorithms sorting...
function inser_sort(arr){
    for(let i=1; i < arr.length; i++){
        let Y = i-1;
        let keepInArr = arr[i];

        while(Y >= 0 && arr[Y] > keepInArr){
            arr[Y + 1] = arr[Y];
            Y--;
        }
        arr[Y + 1] = keepInArr;
    }

    return arr;
}

//Default List,
let unmounted = [0, -1, -3, 12, 1, 2, 4, 3, 90, -2, -4];
console.log('Default -->> ', unmounted);

//After Sorting..
let mounted = inser_sort(unmounted);
console.log('Sorted -->> ', mounted);