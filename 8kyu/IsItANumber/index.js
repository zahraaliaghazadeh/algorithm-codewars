// 8kyu
// Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

// Valid examples, should return true:

// isDigit("3")
// isDigit("  3  ")
// isDigit("-3.23")
// should return false:

// isDigit("3-4")
// isDigit("  3   5")
// isDigit("3 5")
// isDigit("zero")


function isDigit(s) {
    return s.trim() ? !isNaN(s) : false;
  }  



      var input = "s2324"; 
      console.log(isDigit(input), false);
      
      input = "-234.4";    
      console.log(isDigit(input), true);    
  

    //   others solution
    // function isDigit(s) {
    //     return s==parseFloat(s);
    //    }


    // const isDigit = s => /^-?\d+(\.\d+)?$/.test(s);


    // const isDigit = str => !!str.trim() && !isNaN(str);
