/* 7kyu
In the following 6 digit number:

283910
91 is the greatest sequence of 2 consecutive digits.

In the following 10 digit number:

1234567890
67890 is the greatest sequence of 5 consecutive digits.

Complete the solution so that it returns the greatest sequence of five consecutive digits found 
within the number given. The number will be passed in as a string of only digits. It should return 
a five digit integer. The number passed may be as large as 1000 digits.

Adapted from ProjectEuler.net
*/

function solution(digits){
  const digitArr = digits.toString().split("");
  const regex = new RegExp(Math.max(...digitArr) + "\\d{4}", "g");
  
  return Math.max(...digits.toString().match(regex))
}

console.log(solution(1234567898765)) // returns 98765

const longNum = 7316717653133062491922511967442657474235534919493496983520368542506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753123457977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257540920752963450;
console.log(solution(longNum)) // returns 99890

/* ============= other solutions =================
function solution(digits){
  let answer = 0;
  
  for (let i=0; i<digits.length; i++){
    let number = digits.substr(i, 5);  //each loop iteration pulls the next 5 digits into a substring
    if(Number(number) > answer){       //convert to number and compare against answer
      answer = Number(number);
    }
  }
  return answer;
}

====================================================
function solution(digits) {
  for (let i = 10, m; i--;) 
    if (m = digits.match(RegExp(i + '\\d{4}', 'g'))) return Math.max(...m);
}   
*/

