// 8kyu


// You will be given an vector of string(s). You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.



function twoSort(s) {
    var newS = s.sort()
    var result =""
    for ( i = 0 ; i< newS[0].length ; i++){
      result += newS[0][i] 
      if (i !== newS[0].length-1){
            result += "***"
      }
    }
    return result 
  }

  Test.describe("Basic tests",_=>{
    Test.assertEquals(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' );
    Test.assertEquals(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e'); 
    });