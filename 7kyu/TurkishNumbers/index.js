// 7kyu
// Your Task
// Complete the function to convert an integer into a string of the Turkish name.

// input will always be an integer 0-99;
// output should always be lower case.
// Background
// Forming the Turkish names for the numbers 0-99 is very straightforward:

// units (0-9) and tens (10, 20, 30, etc.) each have their own unique name;
// all other numbers are simply [tens] + [unit], like twenty one in English.
// Unlike English, Turkish does not have "teen"-suffixed numbers; e.g. 13 would be directly translated as "ten three" rather than "thirteen" in English.

// Turkish names of units and tens are as follows:

// 0 = sıfır
// 1 = bir
// 2 = iki
// 3 = üç
// 4 = dört
// 5 = beş
// 6 = altı
// 7 = yedi
// 8 = sekiz
// 9 = dokuz

// 10 = on
// 20 = yirmi
// 30 = otuz
// 40 = kırk
// 50 = elli
// 60 = altmış
// 70 = yetmiş
// 80 = seksen
// 90 = doksan
// Examples
//  1  -->  "bir"
// 13  -->  "on üç"
// 27  -->  "yirmi yedi"
// 38  -->  "otuz sekiz"
// 77  -->  "yetmiş yedi"
// 94  -->  "doksan dört"

const getTurkishNumber = (num) => {
  
    var digits = {
    0 : "sıfır",
    1 : "bir" ,
    2 : "iki",
    3 : "üç",
    4 : "dört",
    5 : "beş",
    6 : "altı",
    7 : "yedi",
    8 : "sekiz",
    9 : "dokuz"
      }
    var tens ={
    1 : "on",
    2 : "yirmi",
    3 : "otuz",
    4 : "kırk",
    5 : "elli",
    6 : "altmış",
    7 : "yetmiş",
    8 : "seksen",
    9 : "doksan"
    }
    
    if ( num <= 9 ){
      return digits[num]
    }else {
      var fullNumber = Math.floor(num/10)
      var remainder = (num % 10)
      if ( remainder !== 0 ){
            return tens[fullNumber] + " " + digits[remainder]
      }else{
        return tens[fullNumber]
      }
    }
    
  }




//   test
const chai = require("chai");
const assert = chai.assert;

const tests = [
  [0,  "sıfır"],
  [16, "on altı"],
  [70, "yetmiş"],
  [26, "yirmi altı"],
];

describe("Tests", function() {
  for (const [input, output] of tests) {
    it(`input: ${JSON.stringify(input)}`, function() {
      assert.strictEqual(getTurkishNumber(input), output);
    });
  }
});


// other solution
// let ones = ['sıfır', 'bir', 'iki', 'üç', 'dört', 'beş', 'altı', 'yedi', 'sekiz', 'dokuz']
// let tens = ['on', 'yirmi', 'otuz', 'kırk', 'elli', 'altmış', 'yetmiş', 'seksen', 'doksan']

// const getTurkishNumber = (num) => {
//   let remainder = num % 10
//   let index = Math.floor(num / 10)
  
//   if (num >= 0 && num < 10) {
//     return ones[remainder]
//   }
//   else if (remainder == 0){
//     return tens[index - 1]
//   }
//   else {
//     return tens[index - 1] + " " + ones[remainder]
//   }
// }


// other solution
// const getTurkishNumber = (num) => {
//     var arr1=['sıfır','bir','iki','üç','dört','beş','altı','yedi','sekiz','dokuz','on']
//     var arr2=['','on','yirmi','otuz','kırk','elli','altmış','yetmiş','seksen','doksan','sekiz','dokuz']
//     var str=(num+'').split('')
//     return num>10?(arr2[str[0]])+(str[1]==0?'':" "+arr1[str[1]]):arr1[num]
//   }