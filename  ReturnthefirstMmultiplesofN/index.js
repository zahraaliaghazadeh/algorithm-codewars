// 7kyu
// Implement a function, multiples(m, n), which returns an array of the first m multiples of the real number n. Assume that m is a positive integer.

// Ex.
// multiples(3, 5.0)
// should return
// [5.0, 10.0, 15.0]


function multiples(m, n){
    // code here
    var arr = []
    for (let i = 1; i <= m; i++) {
      arr.push(n*i)
    }
    return arr
  }

  console.log(multiples(3,5))
//   [5, 10, 15]

// solution
// function multiples(m, n){
//     var arr=[];
//     for (var i=1; i<=m; ++i)
//       arr.push(n*i);
//     return arr;
//   }

// solution
// function multiples(m, n){
//     return Array.from(Array(m), (_v, i) => (i + 1) * n);
//   }


// solution
// const multiples = (m, n) => Array.from({ length: m }).map((_, i) => ++i * n);
