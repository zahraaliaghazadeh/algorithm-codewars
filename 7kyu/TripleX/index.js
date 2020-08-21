/* 7kyu
Given a string, return true if the first instance of "x" in the string is immediately followed by the string "xx".

tripleX("abraxxxas") → true
tripleX("xoxotrololololololoxxx") → false
tripleX("softX kitty, warm kitty, xxxxx") → true
tripleX("softx kitty, warm kitty, xxxxx") → false
Note :

capital X's do not count as an occurrence of "x".
if there are no "x"'s then return false
*/

function tripleX(str){
  const i = str.indexOf("x");
  
  return i >= 0 && str.substr(i, 3) === "xxx";
}


console.log(tripleX("abraxxxas"));                      // → true
console.log(tripleX("xoxotrololololololoxxx"));         // → false
console.log(tripleX("softX kitty, warm kitty, xxxxx")); // → true
console.log(tripleX("softx kitty, warm kitty, xxxxx")); // → false

/* =============== other solution ============================
const tripleX = str => /^[^x]*xxx/.test(str);

=================== other solution ===========================
const tripleX = str => { 
    let x = str.indexOf('x')
    return x > -1 && x === str.indexOf('xxx') 
}

==================== other solution ============================
function tripleX(str){
  return str.substr(str.indexOf('x')+1,2) === 'xx';
}

*/
