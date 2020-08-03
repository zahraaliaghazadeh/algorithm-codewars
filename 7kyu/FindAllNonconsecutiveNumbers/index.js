// 7kyu
// Your task is to find all the elements of an array that are non consecutive.

// A number is non consecutive if it is not exactly one larger than the previous element in the array. The first element gets a pass and is never considered non consecutive.

// Create a function named allNonConsecutive

// E.g., if we have an array [1,2,3,4,6,7,8,15,16] then 6 and 15 are non-consecutive.

// You should return the results as an array of objects with two values i: <the index of the non-consecutive number> and n: <the non-consecutive number>.

// E.g., for the above array the result should be:

// [
//   {i: 4, n:6},
//   {i: 7, n:16}
// ]
// If the whole array is consecutive or has one element then return an empty array.

// The array elements will all be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive and/or negetive and the gap could be larger than one.

// If you like this kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges



function allNonConsecutive (arr) {
    var results = []
   for( let i=0 ; i <arr.length-1 ; i++){
     if ( arr[i+1] - arr[i] !== 1){
       results.push(    {     i: i+1 , n: arr[i+1]    }   )
       
     }
       
   }
    return results
  }



   const results = allNonConsecutive([1,2,3,4,6,7,8,10])
   console.log(results, [{i: 4, n:6}, {i: 7, n:10}])




//   other solution
//   function allNonConsecutive (arr) {
//     return arr.map((n, i) => ({ i, n })).filter((v, i, a) => (i !== 0 && a[i - 1].n != (v.n - 1)))
//   }



//   function allNonConsecutive (arr) {
//     let result = [];
//     arr.forEach((val, index) => {
//         if (val !== arr[index - 1] + 1 && index) {
//             result.push({i: index, n: val});
//         }
//     });
//     return result;
// }