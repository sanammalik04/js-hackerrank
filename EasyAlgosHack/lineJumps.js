function kangaroo(x1, v1, x2, v2) {
    //we know that there is constraint limit of 10000
    let max = 10000;
    let complete = false;
    for(let i = 0; i <= max; i++){
        x1 = x1 + v1;
        x2 = x2 + v2;
        if(x1 == x2){
            complete = true
            break
        }
    }
    return complete ? 'YES' : 'NO'
}

console.log(kangaroo(0, 3, 4, 2))
console.log(kangaroo(0, 2, 5, 3))

//x1 is the starting location of first kang
//v1 is its meters per jump
//x2 is the starting locationg for the second
//v2 is its meter per jump