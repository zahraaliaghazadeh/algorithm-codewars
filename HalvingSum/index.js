// 7kyu
// Given a positive integer n, calculate the following sum:

// n + n/2 + n/4 + n/8 + ...

// All elements of the sum are the results of integer division.

// 25  =>  25 + 12 + 6 + 3 + 1 = 47


function halvingSum(n) {
    let sum = 0;
  for (i=0;i<n;i++){
    if ( ( n/ ( 2**(i+2) ) ) >1 ){
      sum += ( n/ ( 2**(i+2)  )
              
    }
  }
  return sum
}


   console.log(halvingSum(25)); // must return 47
   console.log(halvingSum(127)); // must return 247
  
  