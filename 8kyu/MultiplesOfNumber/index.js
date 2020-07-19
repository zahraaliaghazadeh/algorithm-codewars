// 8kyu
// In this simple exercise, you will build a program that takes a value, integer, and returns a list of its multiples up to another value, limit. If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

// If you can, try writing it in only one line of code.



function findMultiples(integer, limit) {
    //your code here
  //   var series = [1,2,3,4,5,6]
    var arr = []
    for (let i=1;i<=limit;i++){
      if (integer * i <= limit){
            arr.push(  integer *i  )
      }
    }
    return arr
  }







console.log(findMultiples(5, 25), [5, 10, 15, 20, 25])
console.log(findMultiples(1, 2), [1, 2])
console.log(findMultiples(5, 7), [5])
console.log(findMultiples(4, 27), [4, 8, 12, 16, 20, 24])
console.log(findMultiples(11, 54), [11, 22, 33, 44])
    


// other solution
function findMultiples(int,limit){
    let result = []
    
    for (let i = int; i<=limit ; i+=int)
      result.push(i)
      
    return result
  }


// other solution
// function findMultiples(int,limit){
//     let multiples = [];
//     for(let i = int; i <= limit; i += int){ multiples.push(i); }
//     return multiples;
//   }


// other solution
// const findMultiples=(n,l)=>Array.from({length:~~(l/n)},(a,i)=>i*n+n);


//other solution
// function findMultiples(int,limit){
//     return Array(Math.floor(limit/int)).fill(1).map((x,i)=>int*(i+1));
//   }


// other solution
// const findMultiples = (integer, limit) =>
//   [...Array(limit / integer ^ 0)].map((_, idx) => ++idx * integer);