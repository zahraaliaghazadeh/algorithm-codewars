// 7kyu
// Given a positive integer n, calculate the following sum:

// n + n/2 + n/4 + n/8 + ...

// All elements of the sum are the results of integer division.

// 25  =>  25 + 12 + 6 + 3 + 1 = 47


function halvingSum(n) {
  if (n === 0 || n === 1) {
    return n
  }
  
  let sum = n;
  
  for (let i = 2; true ; i *= 2) {
    sum += Math.floor(n / i);
    
    if (Math.floor(n / i) === 1) {
      break;
    }
  }
  
  return sum;
}

console.log(halvingSum(25)); // must return 47
console.log(halvingSum(127)); // must return 247
