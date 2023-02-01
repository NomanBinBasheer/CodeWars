/* Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] ); */



//  My Solution

var capitals = function (word) {
	let splittedStr = word.split('')
  let capitalsIndexes = []
  for (let i = 0; i < splittedStr.length; i++){
    if (splittedStr[i].toUpperCase() == splittedStr[i]){
      capitalsIndexes.push(splittedStr.indexOf(splittedStr[i]))
    }
  }
  return capitalsIndexes
};