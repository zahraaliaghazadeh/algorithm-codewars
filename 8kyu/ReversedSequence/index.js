// 8kyu
// Get the number n (n>0) to return the reversed sequence from n to 1.

// Example : n=5 >> [5,4,3,2,1]


const reverseSeq = n => {
    let array= [];
    
    for (let i=1; i<=n; i++){
      array.push(i)
    }
    return array.reverse();
  };


   console.log(reverseSeq(5))
//     [5, 4, 3, 2, 1]



// other solutions
// const reverseSeq = n => {
//     let arr = [];
//       for (let i=n; i>0; i--) {
//         arr.push(i);
//         } return arr;
//     };

//     const reverseSeq = n => {
//         return Array(n).fill(0).map((e, i) => n - i );
//       };


//       const reverseSeq = length => Array.from({length}, () => length--)


//       const reverseSeq = n => {
//         return Array.from({length:n},(_,i)=>n-i);
//       };


//       const reverseSeq = n => [...Array(n)].map((_, i) => n - i);


//       const reverseSeq = n => Array.from(Array(n).keys(), x => x + 1).reverse();


//       const reverseSeq = n => Array.from({length: n}, (v, k) => n - k);
