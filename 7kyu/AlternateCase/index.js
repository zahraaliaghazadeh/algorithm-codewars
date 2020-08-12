// 7kyu
// Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

function alternateCase(s) {
    var string =""
    for ( let i = 0 ; i<s.length ; i++){
      if ( s[i] === s[i].toLowerCase()){
        string += s[i].toUpperCase()
      }else if (s[i] === s[i].toUpperCase()){
        string += s[i].toLowerCase()
      }
    }
    return string;
  }


console.log(alternateCase("abc"), "ABC");
console.log(alternateCase("ABC"), "abc");
console.log(alternateCase("Hello World"), "hELLO wORLD");


// other solutions
// alternateCase = (s) => s.split('').map(x => x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()).join('');


// const alternateCase = s =>
//   s.replace(/\w/g, val => val[`to${val < `a` ? `Low` : `Upp`}erCase`]());


//   function alternateCase(s) {
//     return s.split('').map(e => {
//       return e.charCodeAt(0) > 96 ? e.toUpperCase() : e.toLowerCase();
//     }).join('');
//   }


//   alternateCase = s => [...s].map(x => x == x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()).join('')


//   const alternateCase = str => str.replace(/./g, ch => ch[`to${/[A-Z]/.test(ch) ? 'Low' : 'Upp'}erCase`]()); 


//   function alternateCase(s) {
//     return [...s].map(v=>v===v.toUpperCase()?v.toLowerCase():v.toUpperCase()).join``;
//   }

//   function alternateCase(s) {
//     return s.replace(/([a-z])|[A-Z]/g,(a,b)=>b?a.toUpperCase():a.toLowerCase());
//   }