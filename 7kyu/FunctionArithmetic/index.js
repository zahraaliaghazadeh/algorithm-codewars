// 7kyu

// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

// The four operators are "add", "subtract", "divide", "multiply".

// A few examples:

// arithmetic(5, 2, "add")      => returns 7
// arithmetic(5, 2, "subtract") => returns 3
// arithmetic(5, 2, "multiply") => returns 10
// arithmetic(5, 2, "divide")   => returns 2.5
// ArithmeticFunction.arithmetic(5, 2, "add")      => returns 7
// ArithmeticFunction.arithmetic(5, 2, "subtract") => returns 3
// ArithmeticFunction.arithmetic(5, 2, "multiply") => returns 10
// ArithmeticFunction.arithmetic(5, 2, "divide")   => returns 2
// Try to do it without using if statements!


function arithmetic(a, b, operator){
    //your code here!
    var operators = {
      "add" : "+",
      "subtract": "-",
      "divide": "/",
      "multiply":"*"
    }
    return eval (a+ operators[operator] + b)
}


console.log(arithmetic(1, 2, "add"), 3, "'add' should return the two numbers added together!");
console.log(arithmetic(8, 2, "subtract"), 6, "'subtract' should return a minus b!");
console.log(arithmetic(5, 2, "multiply"), 10, "'multiply' should return a multiplied by b!");
console.log(arithmetic(8, 2, "divide"), 4, "'divide' should return a divided by b!");


// other solution
// const arithmetic = (a, b, operator) => ({
//     'add'     : a + b,
//     'subtract': a - b,
//     'multiply': a * b,
//     'divide'  : a / b
//   }[operator]);