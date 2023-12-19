// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""



// My solution


function solution(string) {
    return string.split('').map(ele => {
      if(ele === ele.toUpperCase()){
          return` ${ele}`
        }
        else if(ele !== ele.toUpperCase()){
          return ele
        }
    }).join('')
  }
  