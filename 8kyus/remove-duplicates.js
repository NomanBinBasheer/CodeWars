/* Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same. */



//  My Solution

function distinct(a) {
    let noUnique = a.filter((e, i) => {
     return a.indexOf(e) === i
   })
   return noUnique
 }