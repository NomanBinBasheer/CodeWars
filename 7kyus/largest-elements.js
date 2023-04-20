/* Write a program that outputs the top n elements from a list.

Example:

largest(2, [7,6,5,4,3,2,1])
// => [6,7] */



//  My Solution

function largest(n, array) {
    let sorted = array.sort((a, b) => a - b)
    return n == 0 ? [] : sorted.slice(-n)
  }


//   ORRRRRRRRRRRR

function largest(n, array) {
    let result = []
    array.sort((a, b) => b - a);
    for ( let i = 0; i < n; i++) {
      result.unshift(array[i]);
    }
    return result;
  }