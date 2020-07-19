// 8kyu
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers) {
    let sum = 0;
    for (i = 0; i < numbers.length; i++) {
      sum += numbers[i] ** 2;
    }
    return sum;
  }



  console.log(squareSum([1,2]))               // 5
console.log(squareSum([0, 3, 4, 5]))          // 50

// other solution
// function squareSum(numbers){
//     return numbers.reduce(function(sum, n){
//       return (n*n) + sum;
//     }, 0)
//   }


// other solution
// function squareSum(numbers){
//     return numbers.map(square).reduce(sum);
//   }
  
//   function square(number) {
//     return number * number;
//   }
  
//   function sum(firstNumber, secondNumber) {
//     return firstNumber + secondNumber;
//   }

// other solution
// function squareSum(numbers){
//     return numbers.reduce((sum,num) => sum + (num * num), 0);
//   }


