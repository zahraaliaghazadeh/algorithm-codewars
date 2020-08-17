// 7kyu
// Description:

// We want to generate a function that computes the series starting from 0 and ending until the given number.

// Example:
// Input:

// > 6
// Output:

// 0+1+2+3+4+5+6 = 21

// Input:

// > -15
// Output:

// -15<0

// Input:

// > 0
// Output:

// 0=0


var SequenceSum = (function() {
    function SequenceSum() {}
  
    SequenceSum.showSequence = function(count) {
      // for
     
  let string = ""
  var sum = 0
  if ( count < 0 ){
    return `${count}<0`
  } else if ( count === 0){
    return "0=0"
  }
    for ( let i = 0 ;i <= count ; i ++ ){
      string += i
      if ( i < count){
         string += "+"
      }
      sum += i
    }
  return string + " = " + sum
    };
  
    return SequenceSum;
  
  })();


  console.log(SequenceSum.showSequence(6),"0+1+2+3+4+5+6 = 21")


//   other solution
// class SequenceSum {
//     static showSequence(n) {
//       return n < 0
//         ? `${n}<0`
//         : `${Array.from({length: n+1}, (v, k) => k).join('+')}${n?' = ':'='}${n*(n+1)/2}`;
//     }
//   }

//   other solution
// var SequenceSum = (function() {
//     function SequenceSum() {}
  
//     SequenceSum.showSequence = function(count) {
      
//       if (count > 0) return [...Array(count + 1).keys()].join('+') + ' = '+ count * (count + 1) / 2;
//       if (count == 0) return '0=0';
//       return count+'<0';
//     };
  
//     return SequenceSum;
  
//   })();

//   other solution
// var SequenceSum = {showSequence : n => n<0 ? n+'<0' : [...Array(n+1).keys()].join('+') + (n ? ' = ' : '=') + n*(n+1)/2}

// other solution
// const SequenceSum = {
//     showSequence: val => val < 0 ? `${val}<0` :
//       [...Array(val + 1).keys()].join(`+`) + (val ? ` = ` : `=`) + val * (++val) / 2
//   };
