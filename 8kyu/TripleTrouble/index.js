// 8kyu
// Triple Trouble
// Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

// E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

// Note: You can expect all of the inputs to be the same length.


function tripleTrouble(one, two, three){
    //Solution
    let string = "";
    for (let i = 0; i < one.length; i++) {
      string += one[i] + two[i] + three[i]
    }
    return string;
   }


console.log(tripleTrouble("this","test","lock"))
// , "ttlheoiscstk");
console.log(tripleTrouble("aa","bb","cc"))
// , "abcabc");
console.log(tripleTrouble("Bm", "aa", "tn"))
// , "Batman");
console.log(tripleTrouble("LLh","euo","xtr"))
// , "LexLuthor");


// other solution
// const tripleTrouble = (one, two, three) => one.split("").map((letter, index) => letter + two[index] + three[index]).join("");


// other solution
// function tripleTrouble(one, two, three){
//     var result="";
//     one.split("");
//     two.split("");
//     three.split("");
//     for(i=0;i<one.length;i++) {
//       result+=one[i]+two[i]+three[i];
//     }
//     return result;
//    }


// other solution
// function tripleTrouble(one, two, three){
//     return one.split('').map((l, p)=>one[p]+two[p]+three[p]).join('')
//    }

// other solution
// const tripleTrouble = (a,b,c) => Array.from(a, (x,i) => x+b[i]+c[i]).join('')
