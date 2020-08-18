// 7kyu
// Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

// flatten([1,2,3]) // => [1,2,3]
// flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
// flatten([[[1,2,3]]]) // => [[1,2,3]]

var flatten = function (oldArr){
    
    
    var newArr = []
    for (var i= 0 ; i<oldArr.length ; i++){
      if (Array.isArray(oldArr[i])){
        newArr = newArr.concat(oldArr[i])
      }else{
        newArr.push(oldArr[i])
      }
    }
    return newArr
  }


console.log(flatten([]), []);
console.log(flatten([1, 2, 3]), [1, 2, 3]);
console.log(flatten([[1, 2, 3], ["a", "b", "c"], [1, 2, 3]]), [1, 2, 3, "a", "b", "c", 1, 2, 3]);
console.log(flatten([[3, 4, 5], [[9, 9, 9]], ["a,b,c"]]), [3, 4, 5, [9, 9, 9], "a,b,c"]);
console.log(flatten([[[3], [4], [5]], [9], [9], [8], [[1, 2, 3]]]), [[3], [4], [5], 9, 9, 8, [1, 2, 3]]);

// other solutions
// var flatten = function (lol){
//     return [].concat.apply([],lol);
//   }


//   const flatten = (array) => [].concat(...array);


//   var flatten = function (array){
//     // TODO: Program me
//     var flat = [];
    
//     for (var i in array)
//       flat = flat.concat(array[i]);
    
//     return flat;
//   }