// 7kyu
// The function takes cents value (int) and needs to return the minimum number of coins combination of the same value.

// The function should return an array where
// coins[0] = pennies ==> $00.01
// coins[1] = nickles ==> $00.05
// coins[2] = dimes ==> $00.10
// coins[3] = quarters ==> $00.25

// So for example:
// coinCombo(6) --> [1, 1, 0, 0]

var coinCombo = function(cents) {
  
  
    var quarters = Math.floor(cents/25)
    var dimes = Math.floor((cents-quarters*25)/10)
    var nickles = Math.floor((cents-quarters*25-dimes*10)/5)
    var pennies = Math.floor((cents-quarters*25-dimes*10-nickles*5)/1)
  
    
    return [pennies,nickles,dimes,quarters]
  }

// tests

       console.log(coinCombo(1), [1, 0, 0, 0]);
       console.log(coinCombo(6), [1, 1, 0, 0]);
       console.log(coinCombo(11), [1, 0, 1, 0]);
    


    //    other solution
    // function coinCombo(cents) {
    //     let coins = [1,5,10,25];
    //     let combo = [0,0,0,0];
    //     for (let i = 3; i >= 0; i--) {
    //         combo[i] = Math.floor(cents / coins[i]);
    //         cents -= combo[i] * coins[i];
    //     }
    //     return combo;
    // }

    //    other solution
    // const coinCombo = cents => {
    //     return [25, 10, 5, 1].map(v => {
    //       let c = ~~(cents / v);
    //       cents -= (c * v);
    //       return c;
    //     }).reverse();
    //   }

    //    other solution
    // var coinCombo = c=> [c%25%10%5,Math.floor(c%25%10/5),Math.floor(c%25/10),Math.floor(c/25)];

    //    other solution
    // var coinCombo = function(cents) {
    //     return [Math.floor(cents%5),Math.floor(cents%25%10/5),Math.floor(cents%25/10),Math.floor(cents/25)]
    //   }
