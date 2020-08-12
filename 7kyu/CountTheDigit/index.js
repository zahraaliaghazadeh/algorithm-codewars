// 7kyu
// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer. Square all numbers k (0 <= k <= n) between 0 and n. Count the numbers of digits d used in the writing of all the k**2. Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.

// #Examples:

// n = 10, d = 1, the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in 1, 16, 81, 100. The total count is then 4.

// nb_dig(25, 1):
// the numbers of interest are
// 1, 4, 9, 10, 11, 12, 13, 14, 19, 21 which squared are 1, 16, 81, 100, 121, 144, 169, 196, 361, 441
// so there are 11 digits `1` for the squares of numbers between 0 and 25.
// Note that 121 has twice the digit 1.

function nbDig(n, d) {
    // your code
  let arr =[]
  for ( let i = 0 ; i <=n ; i++){
    arr.push(i**2)
  }
  let array = arr.join("")
  var count = 0
  for (let j=0 ; j<array.length; j++){
    if (array[j].includes(d))
      count ++
  }
  return count
}

        console.log(nbDig(5750, 0), 4700)
        console.log(nbDig(11011, 2), 9481)
        console.log(nbDig(12224, 8), 7733)
        console.log(nbDig(11549, 1), 11905)


        // other solution
        // function nbDig(n, d) {
        //     var res=0;
        //         for (var g=0;g<=n;g++){
        //           var square=(g*g+"").split("");
        //           square.forEach((s)=>s==d?res++:null)
        //         }return res;
        //     }

        // other solution
            // nbDig = (n, d) => Array.from(Array(n + 1), (e, i) => i * i).join('').match(new RegExp(d, 'g')).length;

            // other solution
            // function nbDig(n, d) {
            //     return [...Array(n+1).keys()].map((i) => {
            //       return i * i;
            //     })
            //     .join('')
            //     .split('')
            //     .filter((i) => {
            //       return i == d;
            //     }).length;
            //   }

            // other solution
            //   function nbDig(n, d) {
            //     return Array.from({length: n+1}, (_,i) => Math.pow(i,2)).join('').match(new RegExp(d,'g')).length;
            // }

            // other solution
            // function nbDig(n, d) {
            //     let but = RegExp("[^"+d+"]","g"), tot = 0;
            //     while( n >-1 ) tot += (''+(n*n--)).replace(but,'').length;
            //     return tot
            //   }