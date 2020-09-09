// 8kyu
// Complete the function which returns the weekday according to the input number:

// 1 returns "Sunday"
// 2 returns "Monday"
// 3 returns "Tuesday"
// 4 returns "Wednesday"
// 5 returns "Thursday"
// 6 returns "Friday"
// 7 returns "Saturday"
// Otherwise returns "Wrong, please enter a number between 1 and 7"


function whatday(num) { 
    var object = {
      1 : "Sunday",
      2 : "Monday",
      3 : "Tuesday",
      4 : "Wednesday",
      5 : "Thursday",
      6 : "Friday",
      7 : "Saturday"
    }
    return object[num] || "Wrong, please enter a number between 1 and 7"
    }



        console.log(whatday(1),'Sunday')
        console.log(whatday(2), 'Monday')
        console.log(whatday(3),'Tuesday')
        console.log(whatday(8),  'Wrong, please enter a number between 1 and 7')
        console.log(whatday(20),  'Wrong, please enter a number between 1 and 7')


        // other solution
        // function whatday(num) { 
        //     var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        //     return days[num - 1] || 'Wrong, please enter a number between 1 and 7';
        //   }
   