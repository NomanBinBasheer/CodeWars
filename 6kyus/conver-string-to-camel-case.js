/* 
 Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"


*/



// My Solution



const toCamelCase = (str) => {
    const getCapitalizedWord = (word) =>
             word.charAt(0).toUpperCase() + word.substr(1);
     
    const splittedWords = str.split('-').join('_').split('_');
     
    const camelCased =  splittedWords.map((word, index) => {
             if (index === 0) return word;
             return getCapitalizedWord(word);
           });
     
      return camelCased.join('')
   };