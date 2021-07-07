// John Watson knows of an operation called a right circular rotation on an array of integers. 
// One rotation operation moves the last array element to the first position and shifts all remaining elements right one. 
// To test Sherlock's abilities, Watson provides Sherlock with an array of integers. 
// Sherlock is to perform the rotation operation a number of times then determine the value of the element at a given position.
// For each array, perform a number of right circular rotations and return the values of the elements at the given indices.

/*
 * Complete the 'circularArrayRotation' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER k
 *  3. INTEGER_ARRAY queries
 */

function circularArrayRotation(a, k, queries) {
   Array.from({length: k}).forEach(() => a.unshift(a.pop()));
   return queries.map(i => a[i])

}

const x = circularArrayRotation([3, 4, 5], 2, [1,2])
console.log(x)