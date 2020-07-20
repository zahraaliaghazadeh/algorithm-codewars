/*  7kyu
	This time no story, no theory. The examples below show you how to write function accum:

	Examples:

	accum("abcd") -> "A-Bb-Ccc-Dddd"
	accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
	accum("cwAt") -> "C-Ww-Aaa-Tttt"
	The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(s) {
  let stringArr = [];
  for (let i = 0; i < s.length; i++) {
    stringArr.push(s[i].toUpperCase() + s[i].toLowerCase().repeat(i))
  }
  
  return stringArr.join("-");
}

console.log(accum("ZpglnRxqenU"));  // return "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
console.log(accum("NyffsGeyylB")); 	// return "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb"
console.log(accum("MjtkuBovqrU"));	// return "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu"
console.log(accum("EvidjUnokmM"));	// return "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm"
console.log(accum("HbideVbxncC"));	// return "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc"

/*============ DIFFERENT SOLUTION =============

function accum(s) {
  return s.split("").map((c, i) => s[i].toUpperCase() + s[i].toLowerCase().repeat(i)).join("-")
}

*/
