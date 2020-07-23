// 8kyu

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

function invert(array) {
    var arr = []
    for (let i=0;i<array.length; i++){
      arr.push(array[i] * -1)
    }
     return  arr
  }



      console.log(invert([1,2,3,4,5]))
    //   , [-1,-2,-3,-4,-5]);
      console.log(invert([1,-2,3,-4,5]))
    //   , [-1,2,-3,4,-5]);
      console.log(invert([]))
    //   , []);
      console.log(invert([0]))
    //   , [0]);
 
 


// other solutions
// function invert(array) {
//     return array.map( x => x === 0 ? x : -x);
//  }



// other solutions

//  function invert(array) {
//     return array.map(i => 0 - i);
//  }


// other solutions

//  function invert(array) {
//     var newArr = [];
//     for(var i = 0; i < array.length; i++){
//       newArr.push(-array[i]);
//     }
//      return newArr;
//   }

// other solutions

//   function invert(array) {
//     return array.map(n => n && -n)
//  }