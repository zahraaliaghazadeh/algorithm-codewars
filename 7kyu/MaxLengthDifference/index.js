//  7kyu
// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).


// #Example:

// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13


// Bash note:
// input : 2 strings with substrings separated by ,
// output: number as a string

function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) {
    return -1;
  }
  
  const sortedA1 = a1.sort((a, b) => b.length - a.length);
  const sortedA2 = a2.sort((a, b) => b.length - a.length);
  
  return Math.max(Math.abs(sortedA1[a1.length - 1].length - sortedA2[0].length), Math.abs(sortedA2[a2.length - 1].length - sortedA1[0].length))
}

const s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
const s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
console.log(mxdiflg(s1, s2)); // returns 13

// ================ DIFFERENT SOLUTION =================
// function mxdiflg(a1, a2) {
//   if (a1.length === 0 || a2.length === 0) {
//     return -1;
//   }

//   let a1Max = Math.max(...(a1.map(el => el.length)));
//   let a1Min = Math.min(...(a1.map(el => el.length)));
  
//   let a2Max = Math.max(...(a2.map(el => el.length)));
//   let a2Min = Math.min(...(a2.map(el => el.length)));
  
//   return Math.max(Math.abs(a1Max - a2Min), Math.abs(a2Max - a1Min));
// }
