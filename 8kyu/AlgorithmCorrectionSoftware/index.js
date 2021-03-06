// 8kyu
// Correct the mistakes of the character recognition software
// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.



function correct(string)
{
  // your code here
  var result =""
  
  for ( let i = 0 ; i<string.length ; i++){
    if (string[i]==="5"){
      result += "S"
    }
     else if (string[i]==="0"){
      result += "O"
    }
     else if (string[i]==="1"){
      result += "I"
    }else{
      result += string[i]
    }
  }
  
  return result
}



console.log(correct("L0ND0N"),"LONDON");
console.log(correct("DUBL1N"),"DUBLIN");
console.log(correct("51NGAP0RE"),"SINGAPORE");
console.log(correct("BUDAPE5T"),"BUDAPEST");
console.log(correct("PAR15"),"PARIS");



// other solution
// correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')


// const corrections = {
//     '5': 'S',
//     '0': 'O',
//     '1': 'I',
//   };
  
//   const correct = string => (
//     string.replace(/[501]/g, character => corrections[character])
//   );

//   function correct(string) {
//     return string.replace(/0/g, "O")
//                  .replace(/5/g, "S")
//                  .replace(/1/g, "I");
// }


// const correct = string => string.replace(/0/g, "O").replace(/1/g, "I").replace(/5/g, "S");


// function correct(string) {
//     return [...string].map(a => ({'0':'O','5':'S','1':'I'})[a]||a).join('')
//   }


//   function correct(string) {
//     const map = {
//       0: "O",
//       1: "I",
//       5: "S"
//     };
    
//     return string
//       .split("")
//       .map(c => map.hasOwnProperty(c) ? map[c] : c)
//       .join("");
//   }

// function correct(string)
// {
//   return string.replace(/[501]/g, x => {
//     if (x === "5") return "S";
//     if (x === "0") return "O";
//     if (x === "1") return "I";
//   })
// }
