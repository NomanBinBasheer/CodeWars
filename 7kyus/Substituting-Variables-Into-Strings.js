/* Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

Example:

solution(5) // should return "Value is 00005" */




//  My Solution

function solution(value){
  let strVal = value.toString()
  let splitted = strVal.split('')
  for (let i= 0; splitted.length < 5; i++){
    splitted.unshift("0") 
  }
  return `Value is ${splitted.join('')}`
}


//  ORRRRRRRRRRRRRRRRRRRR

function solution(value){
  return "Value is " + ("00000" + value).slice(-5);
}