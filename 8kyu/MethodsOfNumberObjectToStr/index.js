// Coding in function colorOf. function accept 3 parameter:r g b. It means value of color red green and blue. the value range is 0-255.

// Use toString(16) Convert numbers r g b to hex string form. at last, combine them to a web color code and return it.

// the color code should starting with "#". and then use 2 characters per color.

// for example:

// colorOf(255,0,0) should return "#ff0000"
// colorOf(0,111,0) should return "#006f00"
// colorOf(1, 2 ,3) should return "#010203"
// That's all of your work. My work is print your color code on your screen.


// Other solution
function colorOf(r,g,b){
    r.toString(16).length < 2 ? r = '0' + r.toString(16) : r = r.toString(16);
    g.toString(16).length < 2 ? g = '0' + g.toString(16) : g = g.toString(16);
    b.toString(16).length < 2 ? b = '0' + b.toString(16) : b = b.toString(16);
    
    return '#' + r + g + b;
  }






console.log(colorOf(255,0,0), "#ff0000");
console.log(colorOf(0,111,0), "#006f00");
console.log(colorOf(1, 2 ,3), "#010203");


// Other solution
// function colorOf(r,g,b)
// {
//    return "#" + toHex(r)+ toHex(g)+ toHex(b);  
// }

// function toHex(n)
// {
//   var result = n.toString(16);
//   return result.length == 1 ? "0" + result : result;  
// }






// other solution
// function colorOf(r,g,b){
//     //coding here
//     return '#'+r.toString(16).padStart(2,0)+g.toString(16).padStart(2,0)+b.toString(16).padStart(2,0);
//   }


// other solution
// function colorOf(r, g, b) {
//     let R = r.toString(16)
//     let G = g.toString(16)
//     let B = b.toString(16)
    
//     if (r < 16) R = '0' + R
//     if (g < 16) G = '0' + G
//     if (b < 16) B = '0' + B
    
//     return '#' + R + G + B
//   }


// other solution
//   function colorOf(...a){
//     return '#'+a.map(x=>x.toString(16).replace(/^(.)$/,'0$1')).join('');
// }