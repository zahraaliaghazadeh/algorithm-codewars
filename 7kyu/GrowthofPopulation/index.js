// 7kyu



function nbYear(p0, percent, aug, p) {
    // your code
  
//   return p0 + percent*p0*n + aug * n = p
//   p0 + n(percent*p0 + aug) =p
  
//   return (p - p0) / ((percent*p0/100)  + aug)

  var years = 0
  while (p0 < p){
    p0 += p0 * percent/100 + aug 
    years ++
  }
  
  return years
}



       console.log(nbYear(1500, 5, 100, 5000), 15);
       console.log(nbYear(1500000, 2.5, 10000, 2000000), 10);
       console.log(nbYear(1500000, 0.25, 1000, 2000000), 94);


    // other solution
    // function nbYear(p0, percent, aug, p) {
    //     for(var y = 0; p0 < p; y++) p0 = p0 * (1 + percent / 100) + aug;
    //     return y;
    //   }