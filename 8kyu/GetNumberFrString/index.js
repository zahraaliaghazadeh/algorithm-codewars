/* 8kyu
Write a function which removes from string all non-digit characters and 
parse the remaining to number. E.g: "hell5o wor6ld" -> 56

Function: ####javascript

getNumberFromString(s)
####ruby

get_number_from_string(s)
####CSharp

GetNumberFromString(string s)
*/

function getNumberFromString(s) {
  return +s.replace(/[^\d]/g, "");
}

console.log(getNumberFromString("1"));                   // returns 1
console.log(getNumberFromString("123"));                 // returns 123
console.log(getNumberFromString("this is number: 7"));   // returns 7

/*=================== other solution ==================
function getNumberFromString(s) {
  return +s.replace(/\D/g, "");
}
*/
