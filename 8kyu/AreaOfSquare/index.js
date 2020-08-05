// 8kyu
// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.



function squareArea(A){
    //   circle
    //   (2 pi r) /4 = A
    //    r = 4A / 2 pi
    //    2 A/pi
      return parseFloat(((4 * A**2) / Math.PI**2).toFixed(2))
    }



        console.log(squareArea(2), 1.62);
        console.log(squareArea(0), 0);
        console.log(squareArea(14.05), 80);
      

        // other solution
        // squareArea = A => +Math.pow((2 * A / 3.1416), 2).toFixed(2);
