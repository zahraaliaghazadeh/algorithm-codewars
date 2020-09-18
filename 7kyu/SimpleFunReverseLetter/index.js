/* 7kyu
Task
Given a string str, reverse it omitting all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str

A string consists of lowercase latin letters, digits and symbols.

[output] a string
*/

function reverseLetter(str) {
  return [...str.replace(/[^a-z]/g, "")].reverse().join("")
}

console.log(reverseLetter("krishan"));     // returns "nahsirk"

console.log(reverseLetter("ultr53o?n"));   // returns "nortlu"

console.log(reverseLetter("ab23c"));       // returns "cba"

console.log(reverseLetter("krish21an"));   // returns "nahsirk"

/*======================== other solution ============================
const reverseLetter = str => str.match(/[a-z]/g).reverse().join('');

*/
