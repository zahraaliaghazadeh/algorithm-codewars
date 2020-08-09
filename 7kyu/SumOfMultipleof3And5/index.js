// 7kyu
// Your task is to write function findSum.

// Upto and including n, this function will return the sum of all multiples of 3 and 5.

// For example:

// findSum(5) should return 8 (3 + 5)

// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

function findSum(n) {
    var sum =0
    for ( let i= 0 ; i<=n ; i++){
      if (i%3 === 0 || i%5===0){
        sum += i
      }
    }
    return sum
  }


console.log(findSum(5), 8);
console.log(findSum(10), 33);

// other solution
// function findSum(n) {
//     if (n < 3) return 0
//     return (n % 3 === 0 || n % 5 === 0) ? n + findSum(n-1) : findSum(n-1)
//    }

// other solution
//  const findSum = n => [...Array(n)].map((_, i) => ++i).reduce((r, e) => r + (e % 5 && e % 3 ? 0 : e), 0);
