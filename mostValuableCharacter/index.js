/* 7 kyu

  In this Kata, you will be given a string and your task is to return the most 
  valuable character. The value of a character is the difference between the index 
  of its last occurrence and the index of its first occurrence. Return the character
  that has the highest value. If there is a tie, return the lexicographically lowest character.

  All inputs will be lower case.

  For example:
  solve('a') = 'a'
  solve('ab') = 'a'. Last occurrence is equal to first occurrence of each character. Return lexicographically lowest.
  solve("axyzxyz") = 'x'
*/

function solve(st) {
  if (st.length === 2) {
    // returns whichever letter is lower
    return st[0] < st[1] ? st[0] : st[1]
  }
  
  if (st.length > 2) {
    let biggestDiff = [];
    
    for (let i = 0; i < st.length; i++) {
      /* lastIndexOf returns the first index of the given char starting from
         the END of the string. indexOf returns the first index of the
         char staring from the START of the string
      */
      const charDiff = st.lastIndexOf(st[i]) - st.indexOf(st[i]);
 
      /* if the array is empty 
          OR the charDiff > the current diff
          OR the charDiff is the same as the current diff but this
          char is alphabetically lower than the current char
          change values of array to this char
      */

      if (biggestDiff.length === 0 
          || charDiff > biggestDiff[1] 
          || (charDiff === biggestDiff[1] && st[i] < biggestDiff[0])) {
        biggestDiff = [st[i], charDiff]
      }
      
      // removes all occurrences of the char
      st.replace(st[i], "");
    }
    
    return biggestDiff[0];
  } 
  
  return st;
}

console.log(solve('a')); // return "a"
console.log(solve('aa')); // return "a"
console.log(solve('bcd')); // return "b"
console.log(solve('axyzxyz')); // return "x"
console.log(solve('aabccc')); // return "c" 