//  8kyu
// You're on your way to the market when you hear beautiful music coming from a nearby street performer. The notes come together like you wouln't believe as the musician puts together patterns of tunes. As you wonder what kind of algorithm you could use to shift octaves by 8 pitches or something silly like that, it dawns on you that you have been watching the musician for some 10 odd minutes. You ask, "How much do people normally tip for something like this?" The artist looks up. "Its always gonna be about tree fiddy."

// It was then that you realize the musician was a 400 foot tall beast from the paleolithic era. The Loch Ness Monster almost tricked you!

// There are only 2 guaranteed ways to tell if you are speaking to The Loch Ness Monster: A.) It is a 400 foot tall beast from the paleolithic era B.) It will ask you for tree fiddy

// Since Nessie is a master of disguise, the only way accurately tell is to look for the phrase "tree fiddy". Since you are tired of being grifted by this monster, the time has come to code a solution for finding The Loch Ness Monster. Note: It can also be written as 3.50 or three fifty.

function isLockNessMonster(s) {
    //FIND THE LOCH NESS MONSTER. SAVE YOUR TREE FIDDY
    
  //   var string = s.split(" ")
    
  //   for ( let i = 0 ; i < string.length ; i++){
  //     if (string[i]=== "tree" && string[i+1] === "fiddy"){
  //       return true
  //     }else if(string[i]=== "tree" && string[i+1] === "fifty"){
  //           return true
  //     }else if(string[i]=== "3.50"){
  //           return true
  //     }
  //     else{
  //       return false
  //     }
  //   }
    return  s.includes("3.50") || s.includes("tree fiddy") || s.includes("three fifty")
    
  }

// other solution
//   function isLockNessMonster(s) {
//     return /3\.50|th?ree fi(?:ft|dd)y/g.test(s);
//   }

// tests
// console.log("Your girlscout cookies are ready to ship. Your total comes to tree fiddy");
// Test.expect(isLockNessMonster("Your girlscout cookies are ready to ship. Your total comes to tree fiddy"));
// console.log("Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance.");
// Test.expect(!isLockNessMonster("Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance."));