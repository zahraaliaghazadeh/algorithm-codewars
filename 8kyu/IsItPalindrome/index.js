// 8kyu
// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

// Implement a function that checks if something is a palindrome.

// Examples
// isPalindrome("anna")   ==> true
// isPalindrome("walter") ==> false
// isPalindrome(12321)    ==> true
// isPalindrome(123456)   ==> false


function isPalindrome(line) {
    var Line = line.toString()
    for ( let i=0 ; i < Line.length ; i++){
      if (Line[i] !== (Line[Line.length-1-i])){
        return false
      }
    }
    return true;
  }


//   describe("Palindrome", function() {
//     it("should identifies that a string is palindrome", function() {
//         Test.assertEquals(isPalindrome("anna"), true);
//     });
    
//     it("should identifies that a string is not palindrome", function() {
//         Test.assertEquals(isPalindrome("walter"), false);
//     });
    
//     it("should identifies that a number is palindrome", function() {
//         Test.assertEquals(isPalindrome(12321), true);
//     });
    
//     it("should identifies that a number is not palindrome", function() {
//         Test.assertEquals(isPalindrome(123456), false);
//     });
    
//     it("should identifies that a string is palindrome on punctuation", function() {
//         Test.assertEquals(isPalindrome("."), true);
//     });
    
//     it("should identifies that a string is palindrome on punctuation", function() {
//         Test.assertEquals(isPalindrome(".!!."), true);
//     });
// });



// other solution
//   function isPalindrome(line) {
//     return (String(line) == String(line).split('').reverse().join('') )
    
//   }

// other solution
//   function isPalindrome(line) {
//     return (line.toString() == line.toString().split('').reverse().join(''));
//   }

// other solution
//   isPalindrome=_=>!0