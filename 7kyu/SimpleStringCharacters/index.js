// 7kyu
// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
// --the order is: uppercase letters, lowercase, numbers and special characters.
// More examples in the test cases.

function solve(s){
    var upperCase    =0
    var lowerCase    =0
    var numbers      =0
    var specialChar  =0
   for ( let i = 0 ; i < s.length ; i++){
   if (s[i].toLowerCase() > s[i] ){
     upperCase ++
     }else if (s[i].toUpperCase() < s[i] ){
     lowerCase ++
     }else if (s[i] >= 0 && s[i]<= 9){
  //      typeof(parseInt(s[i])) === "number"
     numbers ++
     }else{
     specialChar ++
     }
   }
    return [ upperCase ,lowerCase ,numbers ,specialChar ]
    
  }

 
    console.log(solve("Codewars@codewars123.com"),[1,18,3,2]);
    console.log(solve("bgA5<1d-tOwUZTS8yQ"),[7,6,3,2]);
    console.log(solve("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H"),[9,9,6,9]);
    console.log(solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD"),[15,8,6,9]);
    console.log(solve("$Cnl)Sr<7bBW-&qLHI!mY41ODe"), [10,7,3,6])
    console.log(solve("@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft"), [7,13,4,10]);
    


    // other solutions

// const solve = (str) => (
//     [/[A-Z]/, /[a-z]/, /\d/, /[\W]/].map(rgx => str.split(rgx).length - 1)
//   );


//   const solve = (string) => (
//     Object.values([...string].reduce((acc, char) => {
//       if (/[A-Z]/.test(char)) {
//         acc.upper++;
//       } else if (/[a-z]/.test(char)) {
//         acc.lower++;
//       } else if (/[0-9]/.test(char)) {
//         acc.number++;
//       } else {
//         acc.other++;
//       }
//       return acc;
//     }, { upper: 0, lower: 0, number: 0, other: 0 }))
//   );


//   const count = str => regex => str.split(regex).length - 1;
// const solve = str => [/[A-Z]/, /[a-z]/, /\d/, /[\W]/].map(count(str));

// const solve = x => {
//     let u = x.match(/[A-Z]/g)||[]
//     let d = x.match(/[a-z]/g)||[]
//     let n = x.match(/[0-9]/g)||[]
//     let s = x.match(/[^A-Z0-9]/gi)||[]
//     return [u.length, d.length, n.length, s.length]
//   }