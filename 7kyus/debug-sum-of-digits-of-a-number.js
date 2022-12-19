/* Debug   function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.

Example
123  => 6
223  => 7
1337 => 14 */



//  My Solution

function getSumOfDigits(integer) {
    let sum = 0;
    let digits =  integer.toString();
    for(let ix = 0; ix < digits.length; ix++) {
      sum = sum + Number(digits[ix])
    }
    return sum;
  }