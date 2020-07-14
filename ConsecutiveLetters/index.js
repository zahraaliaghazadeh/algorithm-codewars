// 7kyu
// In this Kata, we will check if a string contains consecutive letters as they appear in the English alphabet and if each letter occurs only once.

// For example: 
// solve("abc") = True, because it contains a,b,c
// solve("abd") = False, because a, b, d are not consecutive, and c is missing.
// solve("dabc") = True, because it contains a, b, c, d
// solve("abbc") = False, because b does not occur once.
// solve("v") = True

// All inputs will be lowercase letters.

function solve(s){
    //..
  if (s.length > 1) {
    const orderedStr = s.split("").sort();
    for (let i = 0; i < orderedStr.length - 1; i++) {
      if (orderedStr[i + 1].charCodeAt() - orderedStr[i].charCodeAt() !== 1) {
        return false;
      }
    }
  }
  return true;
}


console.log(solve("abc"));  // expect to get true
console.log(solve("ogh"));  // expect to get false

// other solution
// function solve(s) {
//     return 'abcdefghijklmnopqrstuvwxyz'.includes([...s].sort().join(''));
//   }