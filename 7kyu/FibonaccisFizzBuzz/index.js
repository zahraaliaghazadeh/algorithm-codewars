// 7kyu

// Instructions
// The goal of this kata is two-fold:

// 1.) You must produce a fibonacci sequence in the form of an array, containing a number of items equal to the input provided.

// 2.) You must replace all numbers in the sequence divisible by 3 with Fizz, those divisible by 5 with Buzz, and those divisible by both 3 and 5 with FizzBuzz.

// For the sake of this kata, you can assume all input will be a positive integer.

// Use Cases
// Return output must be in the form of an array, with the numbers as integers and the replaced numbers (fizzbuzz) as strings.

// Examples
// Input:

// fibsFizzBuzz(5)
// Output:

// [ 1, 1, 2, 'Fizz', 'Buzz' ]
// Input:

// fibsFizzBuzz(1)
// Output:

// [1]
// Input:

// fibsFizzBuzz(20)
// Output:

// [1,1,2,"Fizz","Buzz",8,13,"Fizz",34,"Buzz",89,"Fizz",233,377,"Buzz","Fizz",1597,2584,4181,"FizzBuzz"]

var fibsFizzBuzz = function(n) {
  if (n === 1) {
    return [1];
  }
  
  let a = 1;
  let b = 1;
  const arr = [a, b];
  
  for (let i = 2; i < n; i++) {
    const sum = a + b;
    
    if (sum % 15 === 0) arr.push("FizzBuzz");
    else if (sum % 5 === 0) arr.push("Buzz");
    else if (sum % 3 === 0) arr.push("Fizz");
    else arr.push(sum);
    
    a = b;
    b = sum;
  }
  
  return arr;
}



console.log(fibsFizzBuzz(2)) // returns [ 1, 1 ]
console.log(fibsFizzBuzz(5)) // returns [ 1, 1, 2, 'Fizz', 'Buzz' ]
console.log(fibsFizzBuzz(20)) // returns [1, 1, 2, "Fizz", "Buzz", 8, 13, "Fizz", 34, "Buzz", 89, "Fizz", 233, 377, "Buzz", "Fizz", 1597, 2584, 4181, "FizzBuzz"]
    
// other solution
// function fibsFizzBuzz(n) {
//     let res = [], [a, b] = [0, 1];
//     for (let i = 0; i < n; i++) {
//       [a, b] = [b, a + b];
//       res.push(a % 15 == 0 ? 'FizzBuzz' :
//         a % 3 == 0 ? 'Fizz' : a % 5 == 0 ? 'Buzz' : a);
//     }
//     return res;
//   }


// other solution
// function fibsFizzBuzz(n) {
//     const result = [], fibs = fibGen();
//     let fib;
//     while (result.length < n) {
//       fib = fibs.next().value;
//       result.push(fib % 15 ? fib % 5 ? fib % 3 ? fib : 'Fizz' : 'Buzz' : 'FizzBuzz');
//     }
//     return result;
//   }
  
//   function* fibGen() {
//     let [p, n] = [0, 1];
//     while (true) {
//       yield n;
//       [p, n] = [n, p + n];
//     }
//   }

// other solution
// var fibsFizzBuzz = function(n) {
//   if (n === 1) {
//     return [1];
//   }
  
//   const arr = [1, 1];
  
//   for (let i = 1; i < n - 1; i++) {
//     arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
//   }
  
//   return arr.map(num => {
//     if (num % 15 === 0) return "FizzBuzz";
//     if (num % 5 === 0) return "Buzz";
//     if (num % 3 === 0) return "Fizz";
//     else return num;
//   }); 
// }
