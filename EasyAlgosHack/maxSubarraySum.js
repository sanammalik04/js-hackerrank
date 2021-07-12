//accepts an array of integers and a number called num. The function should calculate the maximum sum of num consecutive elements in the array


function maxSubarraySum(arr, num){
    //edgecase
    let maxSum = 0;
    let tempSum = 0;
    if(num > arr.length){
        return null; 
    }
    //creating a sum that goes up to the num. The loop stops at whatever the num is. Then we store that to maxSum
    for(let i = 0; i = num; i++){ 
        maxSum += arr[i];
    }
    tempSum = maxSum;
    //this second loop starts from 0, I will start from the num
    for(let i = num; i < arr.length; i++){
        //here I am adding the three numbers and subtracting the first
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
    

}
console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3))