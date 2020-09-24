



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

// Other solution
// function colorOf(r,g,b){
//     r.toString(16).length < 2 ? r = '0' + r.toString(16) : r = r.toString(16);
//     g.toString(16).length < 2 ? g = '0' + g.toString(16) : g = g.toString(16);
//     b.toString(16).length < 2 ? b = '0' + b.toString(16) : b = b.toString(16);
    
//     return '#' + r + g + b;
//   }