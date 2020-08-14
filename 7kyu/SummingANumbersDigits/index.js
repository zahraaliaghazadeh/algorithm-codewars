// 7kyu
// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits. For example:

//   sumDigits(10);  // Returns 1
//   sumDigits(99);  // Returns 18
//   sumDigits(-32); // Returns 5
// Let's assume that all numbers in the input will be integer values.


function sumDigits(number) {
    var Sum = 0
    if (number>0){
        var Num = number.toString()
      for (let i=0 ; i<Num.length ; i++){
      Sum += parseInt(Num[i])
    } 
    }else{
           var Num = number.toString()
      for (let i=1 ; i<Num.length ; i++){
      Sum += parseInt(Num[i])
    }
   }
    return Sum
  }


console.log(sumDigits(10), 1);
console.log(sumDigits(99), 18);
console.log(sumDigits(-32), 5);


// other solution
// function sumDigits(number) {
//     return Math.abs(number).toString().split('').reduce(function(a,b){return +a + +b}, 0);
//   }