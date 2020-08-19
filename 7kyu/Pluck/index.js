/* 7kyu
Implement a function which takes a sequence of objects and a property name, and 
returns a sequence containing the named property of each object.

For example:

pluck([{a:1}, {a:2}], 'a')      // -> [1,2]
pluck([{a:1, b:3}, {a:2}], 'b') // -> [3, undefined]

If an object is missing the property, you should just leave it as undefined/None in the output array.
*/

function pluck(objs, name) {
  return objs.map(obj => obj[name])
}

console.log(pluck([{a:1}, {a:2}], 'a'))                                                                       // -> [1,2]
console.log(pluck([{a:1, b:3}, {a:2}], 'b'))                                                                  // -> [3, undefined]
console.log(pluck([{ a: 1, b: 2, c: 3 }, { a: 4, b: 5, c: 6 }, { a: 7, b: 8, c: 9 }, { a: 10, b: 11 }], 'a')) // -> [1, 4, 7, 10]

/*=============== other solution ===================
function pluck(objs, name) {
  return objs.reduce((arr, curr) => arr.concat(curr[name]), []);
}

=============== other solution ===================
function pluck(objs, name) {
   const arr = [];
  
   for (let i = 0; i < objs.length; i++) {
     arr.push(objs[i][name])
   }
  
   return arr;  
}
*/
