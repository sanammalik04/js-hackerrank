// Complete the countApplesAndOranges function in the editor below. It should print the number of apples and oranges that land on Sam's house, each on a separate line.

// countApplesAndOranges has the following parameter(s):

// s: integer, starting point of Sam's house location.
// t: integer, ending location of Sam's house location.
// a: integer, location of the Apple tree.
// b: integer, location of the Orange tree.
// apples: integer array, distances at which each apple falls from the tree.
// oranges: integer array, distances at which each orange falls from the tree.


function countApplesAndOranges(s, t, a, b, applesArray, orangesArray){
    let numOfApples = 0;
    let numOfOranges = 0;

    for(let i = 0; i < applesArray.length; i++){

        if(a + applesArray[i] >= s && a + applesArray[i] <= t){
            numOfApples++
        }
    }
    for(let j = 0; j < orangesArray.length; j++){
        
        if(b + orangesArray[j] >= s && b + orangesArray[j] <= t){
            numOfOranges++
        }
    }

        console.log(numOfApples + '\n' + numOfOranges)
}


countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4])