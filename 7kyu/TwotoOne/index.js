// 7kyu
// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

// each taken only once - coming from s1 or s2.
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


function longest(s1, s2) {
    // your code
    
    var string =""
    
    var s3  = s1.split("").sort().join("")
    var s4  = s2.split("").sort().join("")
  
    var s5 = (s1 + s2).split("").sort()
    
    for ( let i = 0 ; i < s5.length ; i++){
      if ( s5[i] ===s5[i+1] ){
        string += ""
      }else{
        string += s5[i]
      }
    }

       console.log(longest("aretheyhere", "yestheyarehere"), "aehrsty")
       console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
       console.log(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")


// other solution
// const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')


// other solution
// const longest = (s1, s2) => Array.from(s1 + s2)
//   .sort()
//   .filter((x, i, a) => x !== a[i-1])
//   .join('');

// other solution
// function longest(s1, s2) {
//   const uniqueStr = (s1 + s2).replace(/(.)(?=.*\1)/g, "");
  
//   return uniqueStr.split("").sort().join("");
// }
