// 7kyu

// Given that

// f0 = '0'
// f1 = '01'
// f2 = '010' = f1 + f0
// f3 = '01001' = f2 + f1
// You will be given a number and your task is to return the nth fibonacci string. For example:

// solve(2) = '010'
// solve(3) = '01001'
// More examples in test cases. Good luck!

// If you like sequence Katas, you will enjoy this Kata: Simple Prime Streaming

function solve(n){
    const array = ["0", "01"];
    
    if (n > 1) {
      for (let i = 1; i < n; i++) {
        array.push(array[array.length - 1] + array[array.length - 2]);
      }
      
      return array[array.length - 1];
    }
    
    return array[n];
  }



    console.log(solve(0),'0');
    console.log(solve(1),'01');
    console.log(solve(2),'010');
    console.log(solve(3),'01001');
    console.log(solve(5),'0100101001001');



    // other solutions
    // const solve = (n) => n === 0 ? '0' : n === 1 ? '01' : solve(n - 1) + solve(n - 2);

    // other solution
    // const solve = ( cache => fn => n => cache[n] || ( cache[n] = fn(n) ) ) ( ["0","01"] ) ( n => solve(n-1) + solve(n-2) ) ;
