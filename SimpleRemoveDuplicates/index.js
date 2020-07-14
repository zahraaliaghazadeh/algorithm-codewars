// 7kyu

// In this Kata, you will remove the left-most duplicates from a list of integers and return the result.

// Remove the 3's at indices 0 and 3
// followed by removing a 4 at index 1
// solve([3, 4, 4, 3, 6, 3]); // => [4, 6, 3]


function solve(arr){
    const uniqueArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
       if (!uniqueArr.includes(arr[i])) {
         uniqueArr.push(arr[i]);
       }
    }
    return uniqueArr.reverse();
  }

  console.log(solve([3,4,4,3,6,3]))
//   [4,6,3]
  console.log(solve([1,2,1,2,1,2,3]))
//   [ 1, 2, 3 ]


// other solution
//   function solve(arr){
//     return arr.filter((val,i) => arr.lastIndexOf(val) == i);
// }