// 7kyu
// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.


// TODO: make this work
// function isSortedAndHow(array) {
// //   if (array.sort(function(a, b){return b - a}) === array){
// //     return "yes, descending"
// //   }else if(array.sort(function(a, b){return a - b}) === array){
// //     return "yes, ascending"
// //   }
//    for (let i=0; i<array.length ; i++){
//      if (array[i] < array[i+1]){
//        return "yes, ascending"
//      }else if (array[i] > array[i+1]){
//        return "yes, descending"
//      }else{
//        return "no"
//      }
//    }

// }
function isSortedAndHow(arr) {
    return arr.every((x,i)=>i==0||arr[i]>=arr[i-1])?'yes, ascending':
           arr.every((x,i)=>i==0||arr[i]<=arr[i-1])?'yes, descending':'no'
  }

  

    
     console.log(isSortedAndHow([1, 2]), 'yes, ascending');
     console.log(isSortedAndHow([15, 7, 3, -8]), 'yes, descending');
     console.log(isSortedAndHow([4, 2, 30]), 'no');
   
  
 

// other solutions


//   const isSortedAndHow = array => {
//     let ascending = array.filter((e, i, a) => e > a[i+1]).length == 0
//     let descending = array.filter((e, i, a) => e < a[i+1]).length == 0
    
//     return ascending ? 'yes, ascending' : descending ? 'yes, descending' : 'no'
//   }


//   const isSortedAndHow = a => {
//     const s = a.join``;
//     return s === a.sort((x, y) => x - y).join`` ? 'yes, ascending' :
//            s === a.sort((x, y) => y - x).join`` ? 'yes, descending' : 'no';
//   }



//   function isSortedAndHow(array) {
//     let asc = true;
//     let des = true;
//       for(let i = 1; i < array.length; i++) {
//         if(array[i] > array[i-1]) des = false;
//         if(array[i] < array[i-1]) asc = false;
//       }
//       return asc ? 'yes, ascending' : des ? 'yes, descending' : 'no'
//     }