// Given two positive integers n and k.

// A factor of an integer n is defined as an integer i where n % i == 0.

// Consider a list of all factors of n sorted in ascending order, return the kth factor in this list or return -1 
// if n has less than k factors.

// var kthFactor = function(n, k) {
//     let factorArr = [];

//     for(let i=1; i <= n; i++){
//         if(n % i === 0){
//             factorArr.push(i);
//         }
//         if(factorArr.length === k){
//             return factorArr[k - 1];
//         }
//     }
//     return -1
    
// };


var kthFactor = function(n, k) {
    let counter = 0;

    let sqrt = Math.sqrt(n) | 0;

    for(let i = 1; i <= sqrt; i++){
        if(n % i === 0){
            counter++;
            if(counter === k){
                return i
            }    
        }
    }
    for(let i = sqrt; i >= 1; i--){
        if(n % i !== 0) continue;

        let pairDivisor = n/i;

        if(pairDivisor !== i){
            counter++
            if(counter === k){
                return pairDivisor;
            }
        }

    }
    return -1
    
};

console.log(kthFactor(12, 3))
console.log(kthFactor(7, 2))
console.log(kthFactor(4, 4))

