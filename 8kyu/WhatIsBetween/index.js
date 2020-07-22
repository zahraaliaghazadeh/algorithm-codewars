// 8kyu
// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]



function between(a, b) {
    // your code here
    let result = []
    for (let i=a; i<=b; i++){
      result.push(i)
    }
    return result
  }





  
console.log(between(1, 4))
//  [1, 2, 3, 4]
console.log(between(-2, 2))
//  [-2, -1, 0, 1, 2]
  


// other solution
//   function between(q, q2) {
//     let a = Array.from({length:(q2-q+1)},(_,i)=>i+q);
//     return a;
//   }

// other solution
//   const between = (a, b) => Array.from(new Array(b-a+1), (_, i) => a + i);


// other solution
//   function between(a, b) {
//     return Array(b - a + 1).fill(1).map((_, i) => a + i)
//   }