// 7kyu


// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case









console.log( isIsogram("Dermatoglyphics"), true );
console.log( isIsogram("isogram"), true );
console.log( isIsogram("aba"), false, "same chars may not be adjacent" );
console.log( isIsogram("moOse"), false, "same chars may not be same case" );
console.log( isIsogram("isIsogram"), false );
console.log( isIsogram(""), true, "an empty string is a valid isogram" );


function isIsogram(str){
    //...
    for(let i=0 ;  i<str.length ; i++){
      var count =0
      for ( let j=i+1 ; j<str.length; j++){
               if (str[i].toLowerCase() === str[j].toLowerCase()){
               return false
          }
        }
      }
     return true
  
  }

// other solution
// function isIsogram(str){ 
//     return !/(\w).*\1/i.test(str)
//   }
//   //z.

// other solution
//   function isIsogram(str){
//     return new Set(str.toUpperCase()).size == str.length;
//   }

// other solution
//   function isIsogram(str){
//     return !str.match(/([a-z]).*\1/i);
//   }