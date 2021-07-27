// loop through the array and check if the current array element is equal to the value
// if it is return the index at which the element is found
// if the value is not found, return -1
//O(n) -- as the array grows we have to do that many searches which is also called linear search


function linearSearch(arr, val){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === val) return i;
    }    
    return -1;  
}

console.log(linearSearch([34, 56, 1, 2], 1)) // 2
console.log(linearSearch([34, 56, 1, 2], 10)) // -1