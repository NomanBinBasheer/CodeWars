/* Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust). */




//  My Solution

function sumOfDifferences(arr) {
    let sortedArr = arr.sort((a, b) => b - a)
    let sum = 0
  //   return (sortedArr[0] - sortedArr[1]) + (sortedArr[1] - sortedArr[2])
    for (let i = sortedArr[0]; i > sortedArr[sortedArr.length - 1]; i--){
      sum += 1
    }
    return sum
  }