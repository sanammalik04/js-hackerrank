//THIS ONLY WORKS ON SORTED ARRAYS! LINEAR SEARCH IS BEST FOR UNSORTED ARRAYS.

//function accepts a sorted array and a value
//create a left pointer at the start of the array, and a right pointer at the end of the array
//while the left pointer comes before the right pointer: 
    //create a pointer in the middle
    //if you find the value you want, return the index
    //if the value is too small, move the left pointer up
    //if the value is too large, move the right pointer down
//if you never find the value, return -1

function binarySearch(arr, val){
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2) //this give us the middle point bc its the average of start and end divided by 2
    // console.log(start, middle, end); //0, 3, 7

    //check if the middle is what the val is 
    while(arr[middle] !== val && start <= end){
        //if the val is less than the middle val then
        if(val < arr[middle]){
            //we move the end pointer to the middle -1 which is the value after the middle val
            end = middle -1;
        }else{
            //if the val is greater than the middle val then we move the start to the left of the middle
            start = middle + 1;
        }
        //we need to get a new middle
        middle = Math.floor((start + end) / 2);
        
    }
    // console.log(start, middle, end)
    return arr[middle] === val ? middle : -1; 
    // if(arr[middle] === val){
    //     return middle;
    // }
    // return -1

}


  console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], -10)) //-1
  console.log(binarySearch([1,2,3,4,5], 2)) // 1
  console.log(binarySearch([1,2,3,4,5], 3)) // 2
  console.log(binarySearch([1,2,3,4,5], 5)) // 4
  console.log(binarySearch([1,2,3,4,5], 6)) // -1


 
