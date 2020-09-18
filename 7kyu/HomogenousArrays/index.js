/* 7kyu
Challenge:

Given a two-dimensional array, return a new array which carries over only those arrays from the original, 
which were not empty and whose items are all of the same type (i.e. homogenous). For simplicity, the arrays 
inside the array will only contain characters and integers.

Example:

Given [[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]], your function should return [[1, 5, 4], ['b']].

Addendum:

Please keep in mind that for this kata, we assume that empty arrays are not homogenous.

The resultant arrays should be in the order they were originally in and should not have its values changed.

No implicit type casting is allowed. A subarray [1, '2'] would be considered illegal and should be filtered out.
*/

function filterHomogenous(arrays) {
  const homogArr = [];
  
  for (let i = 0; i < arrays.length; i++) {
    let isSameType = true;
    
    if (arrays[i].length > 0) {
      for (let j = 0; j < arrays[i].length - 1 && isSameType; j++) {
        if (typeof arrays[i][j] !== typeof arrays[i][j + 1]) {
          isSameType = false;
        }
      }
      
      if (isSameType) homogArr.push(arrays[i]);
    }
  }
  
  return homogArr;
}

console.log(filterHomogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]]));               // returns [[1, 5, 4], ['b']]
console.log(filterHomogenous([[123, 234, 432], ['', 'abc'], [''], ['', 1], ['', '1'], []]));   // returns [[123, 234, 432], ['', 'abc'], [''], ['', '1']]

/*===================== other solution ===========================
function filterHomogenous(arr) {
  return arr.filter(subArr => subArr.length > 0 && subArr.every(val => typeof val === typeof subArr[0]));
}
*/
