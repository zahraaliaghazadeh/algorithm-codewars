// Count how often sign changes in array.

// result
// number from 0 to ... . Empty array returns 0


// const catchSignChange = arr => 0;

function catchSignChange(arr){
    var count = 0
    for (i=1;i<(arr.length);i++){
      if ((arr[i]<0 && arr[i-1]>=0 ) || (arr[i]>=0 && arr[i-1]<0))
      count ++
      
    }
    return count
}

console.log(catchSignChange([1, -3, -4, 0, 5])) 
// expect to get 2


// solution 2
// function catchSignChange(arr) {
//     return arr.slice(1).filter((e,i)=>(e<0)!==(arr[i]<0)).length;
//   }