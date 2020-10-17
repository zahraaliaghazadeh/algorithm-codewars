// 8kyu
// This series of katas will introduce you to basics of doing geometry with computers.

// Point objects have x and y attributes (X and Y in C#) attributes.

// Write a function calculating distance between Point a and Point b.

// Tests round answers to 6 decimal places.


function distanceBetweenPoints(a, b) {
    // your code here
  
  return (Math.sqrt(
    (Object.values(a)[0]  - Object.values(b)[0] )**2 +
    (Object.values(a)[1]  - Object.values(b)[1] )**2
          ))
  }

console.log(distanceBetweenPoints(new Point(3, 3), new Point(3, 3)), 0);
console.log(distanceBetweenPoints(new Point(1, 6), new Point(4, 2)), 5);
console.log(distanceBetweenPoints(new Point(-10.2, 12.5), new Point(0.3, 14.7)).toFixed(6), 10.728001)

// other solutions
// function distanceBetweenPoints(a, b) {
//     return Math.hypot(a.x - b.x, a.y - b.y);
//   }

// distanceBetweenPoints = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);

// var distanceBetweenPoints = ({ x: x1, y: y1 }, { x: x2, y: y2 }) => Math.hypot(x1 - x2, y1 - y2)

// function distanceBetweenPoints(a, b) {
//     let xDiff = Math.abs(a.x - b.x)
//     let yDiff = Math.abs(a.y - b.y)
//     return Math.sqrt(yDiff**2 + xDiff**2)
//     }