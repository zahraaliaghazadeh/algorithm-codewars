// 7kyu
// Given an array, return the difference between the count of even numbers and the count of odd numbers. 0 will be considered an even number.

// For example:
// solve([0,1,2,3]) = 0 because there are two even numbers and two odd numbers. Even - Odd = 2 - 2 = 0.  
// Let's now add two letters to the last example:

// solve([0,1,2,3,'a','b']) = 0. Again, Even - Odd = 2 - 2 = 0. Ignore letters. 
// The input will be an array of lowercase letters and numbers only.

// Haskell: 
// solve ["0","1","2","3","a","b"] = 0 -- In Haskell, all array elements will be strings.
// Other languages: 
// solve([0, 1 ,2, 3, 'a', 'b']) = 0

function solve(a){
    var even = 0
    var odd  = 0
    for ( let i = 0 ; i<a.length ; i++){
      if ( typeof(a[i]) === "number"){
            if (a[i] %2 ===0){
            even ++
            }else{
            odd ++
            }
        }
    }
    return (even-odd);
  };


   console.log(solve([0,1,2,3]),0);
   console.log(solve([0,1,2,3,'a','b']),0);
   console.log(solve([0, 15,'z',16,'m', 13, 14,'c', 9, 10, 13,'u', 4, 3]),0);
   console.log(solve([13, 6, 8, 15, 4, 8, 13]),1);
   console.log(solve([1,'a', 17, 8,'e', 3,'i', 12, 1]),-2);
   console.log(solve([5, 15, 16, 10, 6, 4, 16, 't', 13, 'n', 14, 'k', 'n', 0, 'q', 'd', 7, 9]),2);
    

function solve(a){
    return a.reduce(((x, y) => Number.isInteger(y) ? (y%2 === 0 ? x+1 : x-1) : x), 0);
  } 


  let solve = a => a.filter(n => n % 2 === 0).length - a.filter(n => Math.abs(n % 2) === 1).length;


  function solve(a){
    return a.filter(x=>x%2===0).length-a.filter(x=>x%2===1).length;
  };