/* JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6] */



//  My Solution

function getEvenNumbers(numbersArray){
    let newArr = []
     numbersArray.filter((e, i) => {
       if (e % 2 === 0){
         newArr.push(e)
       }
     })
    return newArr
  }