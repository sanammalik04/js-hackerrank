function areThereDuplicates(...args) {
    //console.log(args)
    let dupObj = {};

    for(let num of args){
        dupObj[args[num]] = (dupObj[args[num]] || 0) +1
        console.log(dupObj)
    }
    for(let key in dupObj){
        if(dupObj[key] > 1){
            return true
        }else{
            return false
        }
    }
}



// console.log(areThereDuplicates(1, 2, 2))
console.log(areThereDuplicates(1, 2, 3))