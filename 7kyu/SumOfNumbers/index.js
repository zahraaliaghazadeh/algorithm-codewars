// 7kyu
// Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples
// GetSum(1, 0) == 1   // 1 + 0 = 1
// GetSum(1, 2) == 3   // 1 + 2 = 3
// GetSum(0, 1) == 1   // 0 + 1 = 1
// GetSum(1, 1) == 1   // 1 Since both are same
// GetSum(-1, 0) == -1 // -1 + 0 = -1
// GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2



function getSum( a,b )
{
   if (a === b) {
     return a;
   }
  const max = Math.max(a, b);
  const min = Math.min(a, b);
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}



       
    console.log(getSum(0,-1))
    // -1
    console.log(getSum(0,1))
    // 1
    
// other solution
    // const GetSum = (a, b) => {
    //     let min = Math.min(a, b),
    //         max = Math.max(a, b);
    //     return (max - min + 1) * (min + max) / 2;
    //   }


// other solution
//       function GetSum(a,b)
// {
//   return (Math.abs(a - b) + 1) * (a+b) / 2;
// }