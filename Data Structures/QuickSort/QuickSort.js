///Quick_Sorting Algorithms programm...
function quick_sorted(list){
    if(list.length <= 1){
        return list;

    }else{
        let newArray = [];
        let left = [];
        let right = [];
        let pivot = list.pop();
        let length = list.length;

        for(let i=0; i < length; i++){
            if(list[i] <= pivot){
                left.push(list[i]);
            }else{
                right.push(list[i]);
            }
        }

        return newArray.concat(quick_sorted(left), pivot, quick_sorted(right));
    }
}

//Default Array...
let unsorted_list = [-1, -12, 0, 12, -4, 23, 45, -3, 6, 3];
console.log('unsorted --->>>', unsorted_list);

//Sorted Array...
let sorted_list = quick_sorted(unsorted_list);
console.log('Sorted --->>>', sorted_list);