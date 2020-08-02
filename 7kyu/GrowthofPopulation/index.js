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