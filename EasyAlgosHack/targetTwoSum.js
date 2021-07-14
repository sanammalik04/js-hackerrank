// Given an array of unsorted unique integers, write a function getTargetIndexes that returns an array of arrays of the 
// index pairs for each of the two numbers that add up to the target.

// Prioritize run time complexity over memory
// An item can not match with itself
// The same pair of indexes should only be included once
// The order of the returned array and its items does not matter


//optimized solution using hash table
const array = [4, -3, 80, 2, 9, 13, 5, 8];
const target = 10;
const getTargetIndexes = (array, target) => {
    //declare  averiable for an empty array for the indexes that will be returned
    let indArr = [];
    //declare variable for the empty object that will hold the keys(integers) and values(indexes) for array
    let arrayValueAtIndex = {};

    for(let i = 0; i <array.length; i++){
        //adding every element to the hash table(object)
        const element = array[i];
        //set it's ket to the element and the value to the index (i)
        arrayValueAtIndex[element] = i

    }

    //iterate through our input array again
    for(let i = 0; i < array.length; i++){
        //the cuurent value is the current index in the array that we are looking at
        const currValue = array[i];
        //matchValue is to see if they sum to our target is target minus currentValue
        const matchedValue = target - currValue;
        //look for matched index which is the hash table and see if the matched value sums to the target
        const matchedIndex = arrayValueAtIndex[matchedValue];

        // the matchedIndex >= 0 is saying, is it a valid index, which starts at 0 and also checking if the matchedIndex is equal to i which is the current item's
        //index. Can't add items to itself.
        if(matchedIndex >= 0 && matchedIndex !== i){
            indArr.push([i, matchedIndex]);

            //make sure we don't count something twice so we set each value we used to -1
            arrayValueAtIndex[currValue] = -1;
            arrayValueAtIndex[matchedValue] = -1;
        }
    }
    return indArr
};

console.log(getTargetIndexes(array, target))
  

//Brute Force Solution
const getTargetIndex = (array, target) => {
    let indArr = [];
    for(let i = 0; i < array.length; i++){
        for(let j = i + 1; j < array.length; j++){
            if(array[i] + array[j] === target){
                indArr.push([i, j])
               
                
            }
        }
    }
    return indArr

};

console.log(getTargetIndex(array, target))

//using map 
const getTargetIndexes1 = (array, target) => {
    let arrayList = new Map()

    for(let i = 0; i < array.length; i++){
        //store the current number
        const currentNum = array[i]
        const compliment = target - currentNum

        if(arrayList.has(compliment)){
            return [arrayList.get(compliment), i]
        }else {
            arrayList.set(currentNum, i)
        }
    }

}
