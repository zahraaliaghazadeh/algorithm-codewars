// 8kyu
// You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

// Your function will accept three arguments:
// The first and second argument should be numbers.
// The third argument should represent a sign indicating the operation to perform on these two numbers.

// if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.

// Example:
// calculator(1,2,"+"); //=> result will be 3
// calculator(1,2,"&"); //=> result will be "unknown value"
// calculator(1,"k","*"); //=> result will be "unknown value"
// Good luck!


function calculator(a,b,sign){

    if ((typeof(a)==="number" && typeof(b) === "number") && (sign === "+" || sign=== "-" || sign==="*" || sign==="/"))
    {
    
    
    switch(sign){
        case "+": 
        return a+b
        case "-":
        return a-b
        case "*":
        return a*b
        case "/":
        return a/b
    }
    
    }else{
      return "unknown value"
    }
  
  }

console.log(calculator(1,2,"+"), 3, "calculate");
console.log(calculator(1,2,"-"), -1, "calculate");
console.log(calculator(3,5,"*"), 15, "calculate");
console.log(calculator(6,2,"/"), 3, "calculate");
console.log(calculator(6,2,"$"), "unknown value", "calculate"); 
console.log(calculator(6,"h","*"), "unknown value", "calculate");   
     


// other solution
// function calculator(a,b,sign) {
//     try
//       { return eval(a+sign+b); }
//     catch(e)
//       { return "unknown value"; }
//   }

// other solution
// function calculator(x,y,sign){
//     var fnMap = {
//       '+': (a,b) => a+b,
//       '-': (a,b) => a-b,
//       '*': (a,b) => a*b,
//       '/': (a,b) => a/b,
//     }
//     if (isNaN(x) || isNaN(y) || !fnMap[sign]) {
//       return "unknown value";
//     }
//     return fnMap[sign](x,y);
//   }