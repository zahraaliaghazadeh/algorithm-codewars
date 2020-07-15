// 8kyu

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with 
//'1'. Return the resulting string.





function fakeBin(x){
    var below5 = [0,1,2,3,4]
    var above5 = [5,6,7,8,9]
    var string = ""
  //   var newX = x.toString()
    for (let i = 0 ; i<x.length ; i++){
      if (below5.includes(parseInt(x[i]))){
  //       x[i] = "0"
        string += "0"
      }
      else if (above5.includes(parseInt(x[i]))){
  //       x[i] = "1"
        string += "1"
  
      }
    }
  return string
  }








    console.log(fakeBin('45385593107843568')) 
    // '01011110001100111'
    console.log(fakeBin('509321967506747'))
    // '101000111101101'
    console.log(fakeBin('366058562030849490134388085'))
    // '011011110000101010000011011'
    



//   other solution
// function fakeBin(x) {
//     return x.split('').map(n => n < 5 ? 0 : 1).join('');
// }
