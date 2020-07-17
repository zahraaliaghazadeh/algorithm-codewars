// 6kyu



function solve(arr){
    if (arr[0] === arr[1] && arr[1] === arr[2]) {
      return Math.floor((arr[0] * 3) / 2)
    }
    arr.sort((a, b) => a - b);
    if (arr[0] + arr[1] <= arr[2]) {
      return arr[0] + arr[1];
    }
    else {
      return arr[2] + Math.floor((arr[0] + arr[1] - arr[2]) / 2)
    }
  }





// ========other solution=========
// solve=([a,b,c])=>Math.min(a+b,a+c,b+c,(a+b+c)/2|0)

// ========other solution=========
// function solve(arr){
//     arr.sort((a,b) => {
//         return a-b;
//     })
//     let res = arr[0]
//     const differenece = arr[2] - arr[1]
//     if (differenece > res){
//         arr[2] -= res
//         res += arr[1]
//     }
//     else{
//         res += arr[2] - (differenece + Math.ceil((res-differenece)/2))
//     }
//     return res
// }


// ========other solution=========
// const solve = ([a, b, c]) => Math.min(a + b, a + c, b + c, (a + b + c) / 2 | 0);


// ========other solution=========
// function solve(arr) {
//     const result = [...arr.sort((a, b) => a - b)];
//     const [min, middle, max] = result;
//     if (min + middle <= max) return min + middle;
    
//     const diff = max - middle;
//     return min <= diff ? min - middle + max : min - Math.ceil((min - diff) / 2) - diff + max;
//   }



// ========other solution=========
// function solve(arr){
//     arr.sort((a,b)=>a-b);
//     return arr[2]>=arr[0]+arr[1]? arr[0]+arr[1]: Math.floor((arr[0]+arr[1]+arr[2])/2);
//   }

