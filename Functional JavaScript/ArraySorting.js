///The Array list here...
var arr = [234, 120, 34, 54, 9, 10, 01, 23, 7,  12, 45, 90, 100, 345, 122]
///Default sorting....
arr.sort()
console.log(arr);

///Custom Sorting Ways....
arr.sort(function(a, b){
    return b-a;
})
console.log(arr)
