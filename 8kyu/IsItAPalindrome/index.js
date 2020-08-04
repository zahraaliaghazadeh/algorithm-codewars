// 8kyu
// Write function isPalindrome that checks if a given string (case insensitive) is a palindrome.

// In Racket, the function is called palindrome?

// (palindrome? "nope") ; returns #f
// (palindrome? "Yay")  ; returns #t


function isPalindrome(x) {
    // your code here
    var Str = x.toLowerCase()
    for ( let i=0 ; i < Str.length ; i++){
      if (  Str[i] !== Str[Str.length-1-i] ){
        return false
      }
     
    } 
        return true
    
  }



console.log(isPalindrome("a"),
//  true));
console.log(isPalindrome("aba"),
//  true));
console.log(isPalindrome("Abba"), 
// true));
console.log(isPalindrome("hello"),
//  false));
console.log(isPalindrome("Bob"),
//  true));
console.log(isPalindrome("Madam"), 
// true));
console.log(isPalindrome("AbBa"),
//  true));
console.log(isPalindrome(""),
//  true));


// other solution
const isPalindrome = (x) => {
    return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
  }


  const isPalindrome = x => x.toLowerCase().split('').reverse().join('') == x.toLowerCase();


  function isPalindrome(x) {
    return x.toLowerCase() == Buffer(x.toLowerCase()).reverse();
  }