// 7kyu
// Find the total sum of internal angles in an n-sided simple polygon. N will be greater than 2.

function angle(n) {
    //code here
    
    return (2*n-4) * 90
    
    
  }


  console.log(angle(3), 180);

  console.log(angle(4), 360);


//   other solution
// const angle = n => 180 * (n - 2)
