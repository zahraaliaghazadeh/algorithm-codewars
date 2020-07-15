/*
    8kyu

    Numbers ending with zeros are boring.

    They might be fun in your world, but not here.

    Get rid of them. Only the ending ones.

    1450 -> 145
    960000 -> 96
    1050 -> 105
    -1050 -> -105
    Zero alone is fine, don't worry about it. Poor guy anyway
*/

function noBoringZeros(n) {
  if (n !== 0) {
    while (n % 10 === 0) {
      n = n / 10;
    }
  }
  
  return n;
}

console.log(noBoringZeros(1450)) // returns 145
console.log(noBoringZeros(960000)) // returns 96
console.log(noBoringZeros(1050)) // returns 105
console.log(noBoringZeros(-1050)) // returns -105
console.log(noBoringZeros(-105)) // returns -105
console.log(noBoringZeros(0)) // returns 0
