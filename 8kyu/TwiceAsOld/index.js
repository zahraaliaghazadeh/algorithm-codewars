// 8kyu

// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

function twiceAsOld(dadYearsOld, sonYearsOld) {
    // your code here
  //   var count = 0
  //   for ( let i = dadYearsOld ; i >= dadYearsOld ; i--){
  //     if (  i !== 2 * sonYearsOld ){
  //       count ++
  //     }
  //   }
  //   return count
    return Math.abs(dadYearsOld-sonYearsOld*2)
  }

// tests

//   it("Testing for dad's age: 36 and son's age: 7", function(){
//    console.log(twiceAsOld(36,7) , 22);
//   });  
//   it("Testing for dad's age: 55 and son's age: 30", function(){
//    console.log(twiceAsOld(55,30) , 5);
//   });
//   it("Testing for dad's age: 42 and son's age: 21", function(){
//    console.log(twiceAsOld(42,21) , 0);
//   });
//   it("Testing for dad's age: 22 and son's age: 1", function(){
//    console.log(twiceAsOld(22,1) , 20);
//   });
//   it("Testing for dad's age: 29 and son's age: 0", function(){
//    console.log(twiceAsOld(29,0) , 29);



// function twiceAsOld(a, b) {
//     return a>2*b ? a-2*b : 2*b-a;
//   }