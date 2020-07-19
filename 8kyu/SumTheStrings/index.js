// 8kyu
// Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string):

//   sumStr("4", "5")    // should output "9"
//   sumStr("34", "5")   // should output "39"
// If either input is an empty string, consider it as zero.



function sumStr(a,b) {
    if (a && b){
       return (parseInt(a) + parseInt(b)).toString()
    } 
   
    else if (!a && !b)
      return '0'
    else 
      return a||b
   
  }


console.log(sumStr("4","5"))
// "9"
console.log(sumStr("34","5"))
// "39"


// other solution
// function sumStr(a,b) {
//     return String(Number(a)+Number(b));
//   }

// other solution
// function sumStr(a,b) {
//     return (+a+ +b)+''  
//   }

// other solution
// function sumStr(a, b) {
//     return ((parseInt(a) || 0) + (parseInt(b) || 0)).toString();
//   }