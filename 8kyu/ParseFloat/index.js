// 8kyu
// Write function parseFloat (for Javascript parseF) which takes a string and returns a number or Nothing (for Python None, for Javascript null) if conversion is not possible.





function parseF(s) {
    //   if (typeof(parseInt(s)) === "number"){
    //       return parseFloat(s)
    
    //   }else{
    //     return null
    //   }
      
      if ( isNaN(parseFloat(s) )) {
          return null
          } else{
        return parseFloat(s)
      }
      
      
    }

   console.log(parseF("1"), 1.0);



// function parseF(s) {
//     return isNaN(parseFloat(s)) ? null : parseFloat(s);
//   }


//   const parseF = s =>  isNaN(parseFloat(s)) ? null : parseFloat(s)



//   const parseF = s => /\d+/.test(s)? +s : null;
