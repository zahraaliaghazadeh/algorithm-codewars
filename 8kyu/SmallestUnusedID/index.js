// 8kyu
// Hey awesome programmer!

// You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

// Therefore you need a method, which returns the smallest unused ID for your next new data item...

// Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

// Go on and code some pure awesomeness!


// function nextId(ids){
//   //this will be awesome!
//       ids.sort()
//   for (i=0;i<ids.length;i++){
//     if (ids[i+1] - ids[i] > 1){
//           return ids[i]+1
//     }
//   else if (ids[i+1]-ids[i]===1){
//       return (ids[ids.length-1])+

//   }
// }
// }

function nextId(ids){
    //this will be awesome!
    if (ids.length > 0) {
      ids.sort((a, b) => a - b);
      let counter = 0;
      while (true) {
        if (ids.indexOf(counter) < 0) {
          return counter;
        }
        counter++;
      }
    }
    return 0;
  }



  console.log(nextId([0,1,2,3,5]))
//   , 4);
    
     console.log(nextId([0,1,2,3,4,5,6,7,8,9,10]))
//  , 11);
 

// other solution
// function nextId(ids){
//     const used = new Set(ids);
//     for (let i = 0; i <= ids.length; i++) {
//       if (!used.has(i)) return i;
//     }
//   }

// other solution
// function nextId(ids){
//     var x = 0;
//     while (ids.includes(x)) x++;
//     return x;
//   }


// other solution
// function nextId(ids){
//     for (i = 0; i < ids.length; i++) { 
//       if (ids.indexOf(i) == -1){
//         return i;
//       }
//     }
//     return ids.length;
//   }