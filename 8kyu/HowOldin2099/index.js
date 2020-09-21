/* 8kyu
Philip's just turned four and he wants to know how old he will be in various years in 
the future such as 2090 or 3044. His parents can't keep up calculating this so they've 
begged you to help them out by writing a programme that can answer Philip's endless questions.

Your task is to write a function that takes two parameters: the year of birth and the year 
to count years in relation to. As Philip is getting more curious every day he may soon want 
to know how many years it was until he would be born, so your function needs to work with 
both dates in the future and in the past.

Provide output in this format: For dates in the future: "You are ... year(s) old." 
For dates in the past: "You will be born in ... year(s)." If the year of birth equals 
the year requested return: "You were born this very year!"

"..." are to be replaced by the number, followed and proceeded by a single space. 
Mind that you need to account for both "year" and "years", depending on the result.
*/

function  calculateAge(birthYear, futureYear) {
  return (x = futureYear - birthYear) > 0 ? 
    `You are ${x} year${x > 1 ? "s" : ""} old.`
    : x === 0 ? 
    "You were born this very year!" 
    : `You will be born in ${-x} year${-x > 1 ? "s" : ""}.`
}

console.log(calculateAge(2012, 2016));    // returns "You are 4 years old."
console.log(calculateAge(1989, 2016));    // returns "You are 27 years old."
console.log(calculateAge(2000, 2090));    // returns "You are 90 years old."
console.log(calculateAge(2000, 1990));    // returns "You will be born in 10 years."
console.log(calculateAge(3400, 3400));    // returns "You were born this very year!" 
console.log(calculateAge(900, 2900));     // returns "You are 2000 years old."
console.log(calculateAge(2010, 1990));    // returns "You will be born in 20 years."
console.log(calculateAge(2010, 1500));    // returns "You will be born in 510 years."
console.log(calculateAge(2011, 2012));    // returns "You are 1 year old."
console.log(calculateAge(2000, 1999));    // returns "You will be born in 1 year."

/*================== other solution ============================
function  calculateAge(m, n) {
  if(m == n) return 'You were born this very year!';
  var year = Math.abs(m-n) == 1 ? 'year' : 'years';
  if(m < n) return "You are "+(n-m)+' '+year+' old.';
  if(m > n) return "You will be born in "+(-n+m)+' '+year+'.';
}

==================== other solution ============================
function  calculateAge(y1,y2) {
  var dif = y2 - y1;
  var s = Math.abs(dif) === 1 ? "" : "s";
  return dif > 0 ? `You are ${dif} year${s} old.` : ( dif < 0 ? `You will be born in ${Math.abs(dif)} year${s}.` : `You were born this very year!`);
}
*/
