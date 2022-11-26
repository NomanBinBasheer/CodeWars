// Return the type of the sum of the two arguments



//  My Solution

function typeOfSum(a, b) {
    if(a === String(a) || b === String(b)){
      return 'string'
    }
    else {
      return 'number'
    }
  }