// 7kyu
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// If you like this Kata, please try:

// Indexed capitalization  https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1

// Even-odd disparity      https://www.codewars.com/kata/59c62f1bdcc40560a2000060



// ========other solution=======
// function capitalize(s){
//     const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
//     const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
//     return [even, odd];
//   };


// ========other solution=======
//   function capitalize(s){
//     return [0,1].map(r=>[...s].map((c,i)=>i%2===r?c.toUpperCase():c).join(''));
//   };

// ========other solution=======
//   function capitalize(s) {
//     const S = s.toUpperCase()
//     let a = ""
//     let b = ""
//     for (let i = 0; i < s.length; ++i) {
//       if (i & 1) {
//         a += s[i]
//         b += S[i]
//       } else {
//         a += S[i]
//         b += s[i]
//       }
//     }
//     return [a, b]
//   }


// ========other solution=======
//   function capitalize(s){
//     return [[...s].map((x,i) => i % 2 == 0 ? x.toUpperCase() : x).join(''),
//             [...s].map((x,i) => i % 2 != 0 ? x.toUpperCase() : x).join('')]
//   }

