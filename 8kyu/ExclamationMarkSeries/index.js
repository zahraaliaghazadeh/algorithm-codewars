// 8kyu
// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"


function replace(s){
    //coding and coding....
    
    var vowels = ["a","e","i","o","u","A","E","I","O","U"]
    var Str =""
    for (let i=0;i<s.length;i++){
      if (vowels.includes(s[i])){
  //         s[i].replace("!")
        Str += "!"
          }else{
            Str += s[i]
          }
    }
    
    return Str
  }

 console.log(replace("Hi!") , "H!!")
 console.log(replace("!Hi! Hi!") , "!H!! H!!")
 console.log(replace("aeiou") , "!!!!!")
 console.log(replace("ABCDE") , "!BCD!")


//  other solution
// function replace(s){
//     return s.replace(/[aeoiu]/ig, '!')  
//   }