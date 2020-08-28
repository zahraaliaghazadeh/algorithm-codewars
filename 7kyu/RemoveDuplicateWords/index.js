// 7kyu
// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'


function removeDuplicateWords (s) {
    // your perfect code...
    var array = s.split(" ")
    var arr = []
    for ( let i = 0 ; i< array.length ; i++){
      if(!arr.includes(array[i])){
       arr.push(array[i])
      }
    }
      
      
      return arr.join(" ")
  }



     console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'), 'alpha beta gamma delta');


    //  other solution
    // const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ')
