/*Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number. */


// My Solution

function divCon(x){
    let strInt = 0
    let numInt = 0
    for (let i = 0; i < x.length; i++){
      if(x[i] === Number(x[i])){
        numInt = numInt + x[i]
      }
      else if(x[i] === String(x[i])){
       strInt = strInt + Number(x[i])
      }
    }
     return numInt - strInt
   }