/*Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types. */



//  My Solution

function findShort(s){
    let splittedStr = s.split(' ')
    
    splittedStr = splittedStr.sort((a, b) => a.length - b.length)
    
    let shortestStr = splittedStr.shift()
    
    return shortestStr.length
  }