//  Write a function that checks if a given string (case insensitive) is a palindrome.


//  My Solution

function isPalindrome(x) {
    if(x.toLowerCase().split('').reverse().join('') === x.toLowerCase()){
      return true
    }
    else{
      return false
    }
  }