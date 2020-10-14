// 8kyu
// Time to test your basic knowledge in functions! Return the odds from a list:

// odds([1,2,3,4,5]) #=> [1,3,5]


function odds(values){
    // arrow it
    return values.filter( value => value % 2 != 0 );
  }


  console.log(odds([]), [], "Should handle empty array");
  console.log(odds([2, 4, 6]), [], "Should handle array with even numbers only");
  console.log(odds([1, 3, 5]), [1, 3, 5], "Should handle array with odd numbers only");
  console.log(odds([1, 2, 3, 4, 5, 6]), [1, 3, 5], "Should handle mixed array");


//   other solutions

//   function odds(values){
//     return values.filter( v => v%2 );
//   }


//   function odds(values) {
//     return values.filter(x => x & 1)
//   }

//   const odds = values => values.filter(n => n & 1);

//   var odds = (values) => values.filter(v => v%2);



