// 7kyu
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmax



function reverseWords(str) {
    // Go for it
    
    var newStr= str.split(" ")
    for ( let i = 0 ; i< newStr.length ; i++){
      newStr[i] = newStr[i].split("").reverse().join("")
    }
  
      return  newStr.join(" ")
  }
  console.log(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
  console.log(reverseWords('apple'), 'elppa');
  console.log(reverseWords('a b c d'), 'a b c d');
  console.log(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');



// other solution
// function reverseWords(str) {
  
//     return str.split("").reverse().join("").split(" ").reverse().join(" ");
//   }

// other solution
//   function reverseWords(str) {
//     return str.split(' ').map( str => str.split('').reverse().join('') ).join(' ');
//   }