// 7kyu
// Given a string and an array of integers representing indices, capitalize all letters at the given indices.

// For example:

// capitalize("abcdef",[1,2,5]) = "aBCdeF"
// capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
// The input will be a lowercase string with no spaces and an array of digits.

// Good luck!

// Be sure to also try:

// Alternate capitalization

// String array revisal


function capitalize(s,arr){
    var string = ""
    for ( let i=0 ; i< s.length; i++){
      if(arr.includes(i)){
           string += (s[i].toUpperCase())
      }else {
        string+= s[i]
      }
    }
    
    return string;
  };

   console.log(capitalize("abcdef",[1,2,5]),'aBCdeF');
   console.log(capitalize("abcdef",[1,2,5,100]),'aBCdeF');
   console.log(capitalize("codewars",[1,3,5,50]),'cOdEwArs');
   console.log(capitalize("abracadabra",[2,6,9,10]),'abRacaDabRA');
   console.log(capitalize("codewarriors",[5]),'codewArriors');
   console.log(capitalize("indexinglessons",[0]),'Indexinglessons');
  
// other solution
// function capitalize(s,arr){
//   for (let i = 0; i < arr.length && arr[i] < s.length; i++) {
//     const index = arr[i];
//     s = s.substring(0, index) + s[index].toUpperCase() + s.substring(index + 1);
//   }
  
//   return s;
// };

// other solution
// const capitalize = (string, array) => 
//   string.replace(/./g, (char, index) =>
//     array.includes(index) ? char.toUpperCase() : char
//   );

//    other solution
// function capitalize(s,arr){
//     return [...s].map((x,i)=>arr.includes(i)?x.toUpperCase():x).join('')
//   };
