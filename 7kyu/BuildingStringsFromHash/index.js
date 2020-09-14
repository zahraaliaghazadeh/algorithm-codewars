/* 7kyu
Complete the solution so that it takes the object (JavaScript/CoffeeScript) or 
hash (ruby) passed in and generates a human readable string from its key/value pairs.

The format should be "KEY = VALUE". Each key/value pair should be separated by a 
comma except for the last pair.

Example:
solution({a: 1, b: '2'}) // should return "a = 1,b = 2"
*/

function solution(pairs){
  let array = [];
  
  for (const key in pairs) {
    array.push(`${key} = ${pairs[key]}`);
  }
  
  return array.toString();
}

console.log(solution({ a: 1, b: 2 }));            // returns "a = 1,b = 2"
console.log(solution({ b: 1, c: 2, e: 3 }));      // returns "b = 1,c = 2,e = 3"
console.log(solution({}));                        // returns ""

/* ================ other solution ===========================
function solution(pairs) {
  return Object.keys(pairs).map(k => `${k} = ${pairs[k]}`).join(",");
}
*/
