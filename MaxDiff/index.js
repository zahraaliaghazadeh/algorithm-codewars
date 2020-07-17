// 7kyu
// You must implement a function maxDiff that return the difference between the biggest and the smallest value in a list(lst) received as parameter.

// The list(lst) contains integers, that means it may contain some negative numbers.

// If the list is empty or contains a single element, return 0.

// The list(lst) is not sorted.

// maxDiff([1, 2, 3, 4]); //return 3, because 4 - 1 == 3
// maxDiff([1, 2, 3, -4]); //return 7, because 3 - (-4) == 7


function maxDiff(list) {
  
    if (list.length === 0 || list.length === 1)
      return 0
    
    list.sort(function(a, b){return a-b})
   
    return (list[list.length-1]  - list[0])


    // ====other solution====
  //   var max = list[0]
  //   var min = list[0]
    
  //   for (let i=0; i<list.length ; i++){
      
  //     if (list[i]>max) 
  //     max = list[i]
  //     if (list[i]<min)
  //     min = list[i]
  //   }
    
  //   return (max-min)
  };


console.log(maxDiff([0, 1, 2, 3, 4, 5, 6]))      //  6
console.log(maxDiff([-0, 1, 2, -3, 4, 5, -6]))   //  11
console.log(maxDiff([0, 1, 2, 3, 4, 5, 16]))     //  16
console.log(maxDiff([16]))                       //  0
console.log(maxDiff([]))                         //  0




// ======other solution========
// function maxDiff(list) {
//     if(!list.length) return 0;
//     return Math.max(...list) - Math.min(...list);
//   };


// ======other solution========
// function maxDiff(list) {
//     return list.length ? Math.max(...list) - Math.min(...list) : 0;
//   };


// ======other solution========
// function maxDiff(list) {
//     return list.length > 1 ? Math.max(...list) - Math.min(...list) : 0
//   }