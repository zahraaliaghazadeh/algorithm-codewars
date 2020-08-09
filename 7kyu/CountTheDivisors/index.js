// 7kyu

// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples
// divisors(4)  = 3  // 1, 2, 4
// divisors(5)  = 2  // 1, 5
// divisors(12) = 6  // 1, 2, 3, 4, 6, 12
// divisors(30) = 8  // 1, 2, 3, 5, 6, 10, 15, 30


function getDivisorsCnt(n){
    // todo
  var count =0
  for ( let i = 0 ; i <=n ; i++){
    if ( n % i === 0 )
      count ++
  }
  return count
}


console.log(getDivisorsCnt(1) , 1);
console.log(getDivisorsCnt(10) , 4);
console.log(getDivisorsCnt(11) , 2);
console.log(getDivisorsCnt(54) , 8);

// other solution
// function getDivisorsCnt(n){c=0; for (i=1;i<=(n>>1)+1;i++) if (n%i==0) c++; return n==1?1:c+1}
