
//solved using multiple pointer technique
function countUniqueValues(numArr){
    //we need this bc if we have an empty array then it will return 1 bc we are returning 1 + 0
    if(arr.length === 0){
        return 0
    }
    //setting i pointer to 0
  let i = 0;
  //j pointer will only go through the entire loop, so we only have one iteration
  for(let j = 1; j < numArr.length; j++){
      //here we will compare the numArr index on j and i: numArr[i] and arr[j]
      // we move j if they are equal and if not then we move i up by one then we put the value where i is. 
      if(numArr[i] !== numArr[j]){
          i++
          numArr[i] = numArr[j];
      }

  }
  //this will give me the num of values in the array up to i. 
  return i + 1
}

console.log(countUniqueValues([1, 1, 1, 2, 2, 3, 4, 5, 5, 5, 6, 7]))




//Sovled using built in unique javascript function
function countUniqueValues(numArr){
    let arr = [...new Set(numArr)].length
    console.log(arr)
}

console.log(countUniqueValues([1, 1, 1, 2, 2, 3, 4, 5, 5, 5, 6, 7]))