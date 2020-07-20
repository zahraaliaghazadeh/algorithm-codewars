// 7kyu
// Welcome. In this kata, you are asked to square every digit of a number.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer


function squareDigits(num){
    //may the code be with you
    
    var newnum=num.toString()
    
    var square = ""
    for (i=0;i<newnum.length;i++){
      square += newnum[i] ** 2
      
    }
    return parseInt(square)
    
  }


  console.log(squareDigits(9119)); // 811181

// other solution
// function squareDigits(num){
//   const numArr = num.toString().split("");
  
//   return parseInt(numArr.reduce((numStr, curr) => numStr + curr ** 2, ""))
// }


// other solution
// function squareDigits(num){
//     return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
    
//   }



// other solution
//   function squareDigits(num){
//     return +num.toString().split('').map(i => i*i).join('');
//   }
