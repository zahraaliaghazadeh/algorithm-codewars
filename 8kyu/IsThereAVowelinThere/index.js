// 8kyu
// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.


function isVow(a){
    for ( let i = 0 ; i<a.length ; i++){
      var temp = String.fromCharCode(a[i])
      if (temp === "a" || temp === "e" || temp === "i" || temp === "o" || temp === "u"){
        a[i] = temp
      }
    }
      return a
    }




    console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]),[118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]);
    console.log(isVow([101,121,110,113,113,103,121,121,101,107,103]),["e",121,110,113,113,103,121,121,"e",107,103]);
    

// ohter solutions
// function isVow(a){
//     for (var i=0, l=a.length; i<l; ++i)
//     {
//       var char = String.fromCharCode(a[i])
//       if ('aeiou'.indexOf(char) !== -1)
//       a[i] = char;
//     }
    
//     return a;
//   }


//   const isVow = a => a.map(x=>'aeiou'.includes(y=String.fromCharCode(x)) ? y : x)



//   const v={"97":"a","101":"e","105":"i","111":"o","117":"u"}
// const isVow=a=>a.map(x=>v[x]||x)


// function isVow(a){
//     return a.map(x => /[aeiou]/.test(String.fromCharCode(x)) ? String.fromCharCode(x) : x);
//   }