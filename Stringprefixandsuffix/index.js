// 7kyu
// In this Kata, you will be given a string and your task will be to return the length of the longest prefix that is also a suffix. A prefix is the start of a string while the suffix is the end of a string. For instance, the prefixes of the string "abcd" are ["a","ab","abc"]. The suffixes are ["bcd", "cd", "d"]. You should not overlap the prefix and suffix.

// All strings will be lowercase and string lengths are 1 <= length <= 500




function solve(s){  
    //..
  let length = 0;
  for (let i = 0; i < s.length / 2; i++) {
    const prefix = s.substring(0, s.length % 2 === 0 ? i + 1 : i);
    if (s.endsWith(prefix)) {
      length = prefix.length;
    }
  }
  return length;
}

console.log(solve("abcd"))
// 0
console.log(solve("abcda"))
// 1
console.log(solve("abcdabc"))
// 3
console.log(solve("abcabc"))
// 3
console.log(solve("abcabca"))
// 1
console.log(solve("aaaa"))
// 2
console.log(solve("aa"))
// 1
console.log(solve("a"))
// 0

// tests: 
// describe("Basic tests", function(){
//     Test.assertEquals(solve("abcd"),0);
//     Test.assertEquals(solve("abcda"),1);
//     Test.assertEquals(solve("abcdabc"),3);
//     Test.assertEquals(solve("abcabc"),3);
//     Test.assertEquals(solve("abcabca"),1);
//     Test.assertEquals(solve("aaaa"),2);
//     Test.assertEquals(solve("aa"),1);
//     Test.assertEquals(solve("a"),0);
//     });

    //   instead of ternary , can say:
    // function solve(s){  
    //     //..
    //   let length = 0;
    //   for (let i = 0; i < s.length / 2; i++) {
    //     const prefix = s.substring(0,i);
    //     if (s.endsWith(prefix)) {
    //       length = prefix.length;
    //     }
    //   }
    //   return length;
    // }


// solution
// function solve(s,i=s.length>>1) { while (i && s.slice(0,i)!=s.slice(-i)) --i; return i; }

// solution
// function solve(s){  
//     let count = 0;
    
//     for (let i = Math.floor(s.length / 2); i >= 0; i--) {
//       const suff = s.substr(0, i);
      
//       if (suff === s.substr(-i)) {
//         count = Math.max(count, suff.length);
//       }
//     }
    
//     return count;
//   }