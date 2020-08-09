// 7kyu
// Are the numbers in order?
// In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.

// For the purposes of this Kata, you may assume that all inputs are valid, i.e. non-empty arrays containing only integers.

// Note that an array of 1 integer is automatically considered to be sorted in ascending order since all (zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value. An empty list is considered a degenerate case and therefore will not be tested in this Kata - feel free to raise an Issue if you see such a list being tested.


// TODO: Need to debug this code it is failing the tests
function inAscOrder(arr) {
    // Code your algorithm here :)
   if ( arr.length === 1 ){
     return true
   }
    
    for ( let i = 0 ; i < arr.length ; i++){
      if (arr[i+1] > arr[i]){
        return true
      }else{
        return false
      }
    }
  
  //   var newArr = arr.sort(function(a, b){return b-a});
  //   if (newArr === arr){
  //   return true
  //   } else if(arr.length === 1){
  //     return true
  //     }else{
  //   return false
  //   }
  }



console.log('Description Examples');

Test.expect(inAscOrder([1, 2, 4, 7, 19]), 'The list of numbers "1, 2, 4, 7, 19" is in ascending order');
Test.expect(inAscOrder([1, 2, 3, 4, 5]), 'The list of numbers "1, 2, 3, 4, 5" is in ascending order');
Test.expect(!inAscOrder([1, 6, 10, 18, 2, 4, 20]), 'The list of numbers "1, 6, 10, 18, 2, 4, 20" is not in ascending order');
Test.expect(!inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1]), 'The list of numbers "9, 8, 7, 6, 5, 4, 3, 2, 1" is in DESCENDING order not ascending order');