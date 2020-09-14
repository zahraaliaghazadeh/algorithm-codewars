// 7kyu
// Task
// You are given an array of positive ints where every element appears three times, except one that appears only once (let's call it x) and one that appears only twice (let's call it y).

// Your task is to find x * x * y.

// Example
// For arr=[1, 1, 1, 2, 2, 3], the result should be 18

// 3 x 3 x 2 = 18

// For arr=[6, 5, 4, 100, 6, 5, 4, 100, 6, 5, 4, 200], the result should be 4000000

// 200 x 200 x 100 = 4000000

// Input/Output
// [input] integer array arr

// an array contains positive integers.

// [output] an integer

// The value of x * x * y


// // other solution
function missingValues(a) {
    const x = a.find( v => a.filter( w => v===w ).length===1 );
    const y = a.find( v => a.filter( w => v===w ).length===2 );
    return x*x*y;
  }

// // other solution
//   function missingValues(arr) {
//     const x = arr.find(item => arr.filter(element => element === item).length === 1);
//     const y = arr.find(item => arr.filter(element => element === item).length === 2);
//     return x * x * y
//    }

// //    other solution
//    const _ = require('lodash');

//    function missingValues(arr) {
//      const xs = _(arr).countBy().invert().value();
//      return xs[1] * xs[1] * xs[2];
//    }

// other solution
// missingValues=a=>(a=>a(1)[0]**2*a(2)[0])(b=>a.filter(c=>a.filter(d=>d==c).length==b))



    
   console.log(missingValues([1, 1, 1, 2, 2, 3]),18)
    
   console.log(missingValues([96, 56, 24, 46, 75, 46, 75, 21, 46, 21, 75, 96, 56, 96, 56]),12096)
    
   console.log(missingValues([27, 65, 44, 39, 44, 21, 21, 44, 65, 39, 21, 65]),28431)
    
   console.log(missingValues([66, 4, 80, 66, 4, 83, 97, 81, 19, 4, 80, 51, 83, 81, 83, 66, 51, 80, 97, 81, 97]),18411)
    
   console.log(missingValues([60, 76, 86, 76, 86, 53, 60, 88, 71, 71, 71, 86, 88, 76, 88, 17, 60, 26, 17, 17, 26, 53, 98, 53]),249704)
    
   console.log(missingValues([42, 23, 45, 33, 33, 19, 42, 79, 79, 23, 95, 95, 79, 19, 42, 33, 19, 23]),192375)
    
   console.log(missingValues([4, 74, 41, 41, 41, 88, 63, 35, 35, 4, 88, 13, 63, 74, 63, 88, 4, 74]),5915)
    
