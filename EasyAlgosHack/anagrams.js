//Given two strings, write a function to determine if the second string is an anagram of the first. 
//An anagram is a word, phrase, or name formed by rearranging the letters of another, 
//such as cinema, formed from iceman. 

function anagrams(str1, str2){
    if(str1.length !== str2.length) {
        return false;
    }
    let strObj1 = {};
    let strObj2 = {};

    for(let letter of str1){
        strObj1[letter] = (strObj1[letter] || 0) + 1
    }
    for(let letter of str2){
        strObj2[letter] = (strObj2[letter] || 0) + 1
    }
    for(let key in strObj1 && strObj2){
        if(strObj1[key] === strObj2[key]){
            return true
        } else {
            return false
        }
    }






}
//testing
console.log(anagrams("aaz", "zza")) //false
console.log(anagrams("anagram", "nagaram")) //true
console.log(anagrams("rat", "car")) //false
console.log(anagrams("qwerty", "qeywrt")) //true