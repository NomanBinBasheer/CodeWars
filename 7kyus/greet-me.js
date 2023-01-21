/* Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!" */



//  My Solution

var greet = function(name) {
  let toLower = name.toLowerCase()
  let capi = toLower.charAt(0).toUpperCase() + toLower.slice(1)
  
  return `Hello ${capi}!`
};