
//two positive numbers, find out if the two numbers have the same frequency of digits
//to compare I will have to use and object


function sameFrequency(num1, num2){
    //converted integers to strings
    let numStr1 = num1.toString();
    let numStr2 = num2.toString();
    
    //edge case, if the strings don't have the same length then return false
    if(numStr1.length !== numStr2.length){
        return false
    }

    //create empty objects for the strgs
    let numObj1 = {};
    let numObj2 = {};

    for(let num of numStr1){
        numObj1[num] = (numObj1[num] || 0) + 1
    }

    for(let num of numStr2){
        numObj2[num] = (numObj2[num] || 0) + 1
    }

    for(let key in numObj1 && numObj2){
        if(numObj1[key] === numObj2[key]){
            return true
        }else{
            return false
        }
    }


}

console.log(sameFrequency(182, 281)) //true
console.log(sameFrequency(34, 14)) //false
console.log(sameFrequency(3589578, 5879385)) //true
console.log(sameFrequency(22, 222)) //false