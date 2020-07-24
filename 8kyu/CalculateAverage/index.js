// 8kyu









Test.assertEquals(find_average([1,1,1]), 1);
Test.assertEquals(find_average([1,2,3]), 2);



// other solution
// function find_average(array) {
//     var sum = array.reduce((a, b) => a + b, 0);
//     return sum/array.length;
//   }


// other solution
//   function find_average(array) {
//     return array.reduce((result, current) => result + current, 0) / array.length;
//   }


// other solution
//   function find_average(array) {
//     return array.reduce((a, b) => (a + b)) / array.length;
//   }


// othe solution
// const sum = array => (array) ? array.reduce((a,b)=>a+b) : 0;
// const find_average = array => (array) ? sum(array)/array.length : 0 ;
