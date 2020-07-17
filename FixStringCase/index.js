// 7kyu
// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

function solve(s){
  var upper = 0
  var lower = 0
  for ( let i=0; i<s.length ; i++){
   if (s[i].toLowerCase() === s[i]){
     lower ++
   }else {
     upper ++
   }
  }
  if (upper > lower)
  return s.toUpperCase()
  else 
    return s.toLowerCase()
}


console.log(solve("code"))  // "code"
console.log(solve("CODe"))  // "CODE"
console.log(solve("COde"))  // "code"
console.log(solve("Code"))  // "code"

/*============== DIFFERENT SOLUTION ================
function solve(s){
  // if the string is all upper or all lower return the string
  if (s === s.toLowerCase() || s === s.toUpperCase()) {
    return s;
  }
  
  // Uppercase characters > lowercase then change lowercase to upper
  if ((s.match(/[A-Z]/g)).length > (s.match(/[a-z]/g)).length) {
    return s.replace(/[a-z]/g, x => x.toUpperCase())
  }
  
  // change all upper case to lower
  return s.replace(/[A-Z]/g, x => x.toLowerCase())
}
*/
