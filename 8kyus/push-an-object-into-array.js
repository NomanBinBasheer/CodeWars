/* You are trying to put a hash in ruby or an object in javascript or java into an array, but it always returns error, solve it and keep it as simple as possible! */


//  My Solution

items = []
let obj = {
  a: "b",
  c: "d"
}
items.push(obj)


//  ORRRRRRR


var items = [];
items.push({a: "b", c: "d"});

