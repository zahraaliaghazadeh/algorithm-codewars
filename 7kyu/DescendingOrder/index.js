// 7kyu
// Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321


function descendingOrder(n){
    //...
     return parseInt(n.toString().split("").sort().reverse().join(""))
  }



console.log(descendingOrder(0))            //  0
console.log(descendingOrder(1))            //  1
console.log(descendingOrder(123456789))    //  987654321


// other solution
// function descendingOrder(n){
//     return +(n + '').split('').sort(function(a,b){ return b - a }).join('');
//   }



// other solution
//   function descendingOrder(n){
//     return parseInt(n.toString().split('').sort().reverse().join(''), 10);
//   }



//   other solution
// function descendingOrder(n) {
//     return n.digits().sort().reverse().undigits();
//   }
  
//   Number.prototype.digits = function() {
//     const result = [];
//     let n = this;
//     do {
//       result.unshift(n % 10);
//       n = Math.floor(n / 10);
//     } while(n);
//     return result;
//   };
  
//   Array.prototype.undigits = function() {
//     return this.reduce((n, d) => n * 10 + d, 0);
//   };