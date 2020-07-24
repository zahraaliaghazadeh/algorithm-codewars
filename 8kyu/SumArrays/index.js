// 8kyu










// other solution
sum = function (numbers) {
    "use strict";
    return numbers.reduce(function(t, n){
      return t + n;
    }, 0);
  };



// other solution
  function sum(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
  }


// other solution
  const sum = n => n.reduce((a,b) => a+b, 0);
