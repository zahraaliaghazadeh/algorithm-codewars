// 7kyu
// Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

// a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

// You may assume the input is always valid.

// Examples
// isPowerOfTwo(1024) // -> true
// isPowerOfTwo(4096) // -> true
// isPowerOfTwo(333)  // -> false
// Beware of certain edge cases - for example, 1 is a power of 2 since 2^0 = 1 and 0 is not a power of 2.





function isPowerOfTwo(n){
    //.. should return true or false ..
    if(n===0){
      return false
    }
    else if (Math.log2(n) === Math.floor(Math.log2(n))){
      return true
    }else{
      return false
    }
  }


console.log(isPowerOfTwo(2), true)
console.log(isPowerOfTwo(4096), true)
console.log(isPowerOfTwo(5), false)

// other solution
// function isPowerOfTwo(n){
//     return Number.isInteger(Math.log2(n));
    
// }

// function isPowerOfTwo(n){
//     if(n<2) return false;
//     if(n==2) return true;
//     if(n>2) return isPowerOfTwo(n/2);
//   }


//   function isPowerOfTwo(n){

//     const divide = (number) => {
//     return number < 10 ? number : divide(number / 2)
//     }
    
//     return divide(n) % 2 === 0
    
//     }