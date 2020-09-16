/* 7kyu
The aim of this kata is to split a given string into different strings of equal size 
(note size of strings is passed to the method)

Example:

Split the below string into other strings of size #3

'supercalifragilisticexpialidocious'

Will return a new string
'sup erc ali fra gil ist ice xpi ali doc iou s'
Assumptions:

String length is always greater than 0
String has no spaces
Size is always positive
*/

var splitInParts = function(s, partLength){
  return [...s].reduce((newStr, c, index) => {
    newStr += c;
    
    if ((index + 1) % partLength === 0 && index !== s.length - 1) {
      newStr += " ";
    }
    
    return newStr;
  }, "");
}

console.log(splitInParts("supercalifragilisticexpialidocious", 3));    // returns "sup erc ali fra gil ist ice xpi ali doc iou s"
console.log(splitInParts("HelloKata", 1));                             // returns "H e l l o K a t a"
console.log(splitInParts("HelloKata", 9));                             // returns "HelloKata"

/*====================== other solution ====================
const splitInParts = (s, partLength) => 
  s.match(new RegExp(`.{1,${ partLength }}`, 'g')).join(' ');

======================= other solution ======================
var splitInParts = function(s, partLength){
  const array = [];
  
  for (let i = 0; i < s.length; i += partLength) {
    array.push(s.substr(i, partLength));
  }
  
  return array.join(" ");
}

*/
