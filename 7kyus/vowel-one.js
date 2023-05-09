/* vowelOne
Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

All non-vowels including non alpha characters (spaces,commas etc.) should be included.

Examples:

vowelOne( "abceios" ) // "1001110"

vowelOne( "aeiou, abc" ) // "1111100100" */




//   My Solution

function vowelOne(s){
    let outStrArray = []
    let splitted = s.split('')
    for (let i = 0; i < splitted.length; i++){
      if (splitted[i].toLowerCase() === 'a' || splitted[i].toLowerCase() === 'e' || splitted[i].toLowerCase() === 'i' || splitted[i].toLowerCase() === 'o' || splitted[i].toLowerCase() === 'u'){
        outStrArray.push('1')
      }
      else{
        outStrArray.push('0')
      }
    }
   return outStrArray.join('')
 }


//   ORRRRRRRRRRRRRRRRRRRRR

function vowelOne(s){
    return s.split('').map(x => ('aeiouAEIOU'.includes(x)) ? 1 : 0).join('');
  }


//   ORRRRRRRRRRRRRRRRRRRRRRRRRRRRRR

function vowelOne(s){
    const vowel = 'aeiou';
    const str = s.toLowerCase().split('');
    return str.map(el=>(vowel.includes(el))?"1":"0").join("");
  }