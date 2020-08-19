// 7kyu

// In this Kata, you will be given a number in form of a string and an integer k and your task is to insert k 
// commas into the string and determine which of the partitions is the largest.

// For example:
// solve('1234',1) = 234 because ('1','234') or ('12','34') or ('123','4').
// solve('1234',2) = 34 because ('1','2','34') or ('1','23','4') or ('12','3','4'). 
// solve('1234',3) = 4
// solve('2020',1) = 202

function solve(str,k){
  let max = 0;
  
  for (let i = 0; i < k + 1; i++) {
    const part = +str.substr(i, str.length - k);
    
    if (part > max) max = part;
  }
  
  return max;
}

console.log(solve('123',1) ,23);
console.log(solve('1234',1),234);
console.log(solve('1234',2),34);
console.log(solve('1234',3),4);

/* ========== other solution =================
function solve(str, k) {
    let len = str.length - k
    let arr = []
    for (let i = 0; i < str.length; i++)
        arr.push(str.slice(i, len + i))
    return Math.max(...arr)
}
*/
