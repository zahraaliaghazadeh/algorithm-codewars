// 6kyu
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Note: If the number is a multiple of both 3 and 5, only count it once.



function solution(number){
    let sum = 0;
    for (let i = 1; i < number; i++) {
      if (i % 15 === 0 || i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    return sum;
  }




  console.log(solution(10))


//   =======other solution==========
// function solution(number){
//     var sum = 0;
    
//     for(var i = 1;i< number; i++){
//       if(i % 3 == 0 || i % 5 == 0){
//         sum += i
//       }
//     }
//     return sum;
//   }

// ==========other solution==========
// function solution(number){
//     var n3 = Math.floor(--number/3), n5 = Math.floor(number/5), n15 = Math.floor(number/15);
//     return (3 * n3 * (n3 + 1) + 5 * n5 * (n5 + 1) - 15 * n15 * (n15+1)) /2;
//   }

// ==========other solution===========
// solution= n=> n<=0?0:Array.from({length: n}, (_,i) => (i%3==0||i%5==0)?i:0).reduce((x,y)=>x+y)
