function averagePair(arr, num){
    let start = 0;
    let end = arr.length -1 //the end is until the last element in the array 

    while(start < end){
        let average = (arr[start] + arr[end])/2
        if(average === num){
            return true
        }else if(average < num){
            start++
        }else{
            end--
        }
    }
    return false

}

  console.log(averagePair([1,2,3], 2.5)) //true
  console.log(averagePair([1,3,3,5,6,7,10,12,19], 8)) //true
  console.log(averagePair([-1,0,3,4,5,6], 4.1)) //false
  console.log(averagePair([], 4)) //false