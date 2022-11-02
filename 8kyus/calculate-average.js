/* Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0. */


// My Solution

function findAverage(array) {
    if (array.length != 0){
     let avg = array.reduce((a, b) => a + b, 0) / array.length
     
     return avg
    }
    else{
      return 0
    }
  }