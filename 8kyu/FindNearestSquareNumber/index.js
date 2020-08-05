/* 8kyu
Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.
*/

function nearestSq(n) {
  return Math.pow(Math.round(Math.sqrt(n)), 2);
}

console.log(nearestSq(1));    // returns 1
console.log(nearestSq(2));    // returns 1
console.log(nearestSq(10));   // returns 9
console.log(nearestSq(111));  // returns 121
console.log(nearestSq(9999))  // returns 10000

/*======= OTHER SOLUTIONS ========
function nearestSq(n){
  const sqrt = Math.sqrt(n);
  
  if (Math.floor(sqrt) === sqrt) return n;
  
  if (Math.abs(n - Math.floor(sqrt) ** 2) < Math.abs(n - (Math.floor(sqrt) + 1) ** 2)) return Math.floor(sqrt) ** 2;
  
  return (Math.floor(sqrt) + 1) ** 2;
}

===================================
function nearestSq(n) {
  return Math.round(n ** 0.5) ** 2);
}

*/
