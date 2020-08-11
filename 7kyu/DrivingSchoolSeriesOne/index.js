// 7kyu
// Every month, a random number of students take the driving test at Fast & Furious (F&F) Driving School. To pass the test, a student cannot accumulate more than 18 demerit points.

// At the end of the month, F&F wants to calculate the average demerit points accumulated by ONLY the students who have passed, rounded to the nearest integer.

// Write a function which would allow them to do so. If no students passed the test that month, return 'No pass scores registered.'.


// Example:

// [10,10,10,18,20,20] --> 12

function passed (list) { 
    //Good luck!
      var average = 0
      var sum =0
      var count =0
      
      for ( let i=0 ; i<list.length; i++){
        if (list[i]<=18){
          sum += list[i]
          count ++
        }
          
      }
      average = Math.round( sum / count)
      if( count === 0) {
        return "No pass scores registered."
      }else{
          return average
      }
    } 

console.log(passed([10,10,10,18,20,20]),12);
console.log(passed([21,22,24]),'No pass scores registered.');
console.log(passed([3,22,9,13,20,18,2,14,20,8,23,12,7,21,21,19,20,11,18,7,13,22,11,20,9]), 10);
console.log(passed([19,16,8,11,25,10,29,22,23]),11);


// other solutions
// function passed (list) { 

//     //Good luck!
//       var res = list.filter(v => v <= 18);
//       return res.length ? Math.round(res.reduce((s, v) => s + v, 0)/res.length) : 'No pass scores registered.';
//     } 

// other solutions
//     function passed(list) {
//         var x = list.filter(function(el) {
//           return el <= 18;
//         });
//         var y = x.length;
//         if(x.length > 0) {
//           list = x.reduce(function(a, b) {
//             return a + b;
//           });
//         }
//         if(list >= 0) {
//           return Math.round(list/y);
//         } else {
//           return "No pass scores registered.";
//         }
//       } 

// other solutions
//       const passed = list => {
//         ({students, points} = list.reduce((acc, p) => p < 19 ? ({'students': (acc['students'] || 0) + 1, 'points': (acc['points'] || 0) + p}) : acc, {}));
//         return students ? Math.round(points/students) : 'No pass scores registered.';
//       };

// other solutions
//       var passed = a => (a=a.reduce((a,v) => (v<19 && ++a.d && (a.n+=v), a),{n:0,d:0})).d ?
//         Math.round(a.n/a.d) : 'No pass scores registered.';


// other solution
// const passed = list => !list.filter(ele => ele <= 18).length ? 'No pass scores registered.' : Math.round(list.filter(ele => ele <= 18).reduce((acc, cv) => acc + cv, 0)/list.filter(ele => ele <= 18).length);
