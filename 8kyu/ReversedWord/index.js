// 8ktu

// Complete the solution so that it reverses all of the words within the string passed in.

// Example:

// reverseWords("The greatest victory is that which requires no battle")
// // should return "battle no requires which that is victory 

function reverseWords(str){
    var newstring = str.split(" ")
    return newstring.reverse().join(" ")
  //   return str; // reverse those words
    
  }



     console.log(reverseWords("hello world!"))
    //   "world! hello"
     console.log(reverseWords("yoda doesn't speak like this" ))
    //   "this like speak doesn't yoda"
     console.log(reverseWords("foobar"                       ))
    //    "foobar"
     console.log(reverseWords("kata editor"                  ))
    //   "editor kata"
     console.log(reverseWords("row row row your boat"        ))
    //    "boat your row row row"
  

// other solution
// function reverseWords(str){
//     return str.trim().split(' ').reverse().join(' '); // reverse those words
//   }