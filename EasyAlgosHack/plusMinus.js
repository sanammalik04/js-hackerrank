// Given an array of integers, calculate the ratios of its elements that are positive, 
// negative, and zero. 
// Print the decimal value of each fraction on a 
//new line with  places after the decimal.


let arr = [-4, 3, -9, 0, 4, 1]
function plusMinus(arr){
    let n = arr.length;
    let positive = 0;
    let negative = 0;
    let zero = 0;

    for(let i = 0; i < n; i++){
        if(arr[i] > 0){
            positive += 1;
        } else if(arr[i] < 0){
            negative += 1;
        } else {
            zero += 1;
        }
    }
    let pos = positive/n;
    let neg = negative/n;
    let zer = zero/n;

    console.log(pos.toFixed(6) + "\n" + neg.toFixed(6) + "\n" + zero.toFixed(6))
    
}
console.log(plusMinus(arr))







