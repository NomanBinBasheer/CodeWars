/* Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

Example
[4,3,9,7,2,1] -> [2,9,3,49,4,1]
Notes
The input array will always contain only positive numbers, and will never be empty or null. */




// My Solution

function squareOrSquareRoot(array) {
  return array.map(x => {
    const sqrt = Math.sqrt(x)
    if (sqrt % 1 == 0){
      return sqrt
    }
    else{
      return x*x
    }
  })
}