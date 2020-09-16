/* 7kyu
A grid is a perfect starting point for many games (Chess, battleships, Candy Crush!).

Making a digital chessboard I think is an interesting way of visualising how loops can work together.

Your task is to write a function that takes two integers rows and columns and returns a chessboard 
pattern as a two dimensional array.

So chessBoard(6,4) should return an array like this:

[
    ["O","X","O","X"],
    ["X","O","X","O"],
    ["O","X","O","X"],
    ["X","O","X","O"],
    ["O","X","O","X"],
    ["X","O","X","O"]
]

And chessBoard(3,7) should return this:
[
    ["O","X","O","X","O","X","O"],
    ["X","O","X","O","X","O","X"],
    ["O","X","O","X","O","X","O"]
]

The white spaces should be represented by an: 'O' and the black an: 'X'

The first row should always start with a white space 'O'
*/

function chessBoard(rows, columns) {
  let displayO = true;
  let board = [];
  
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < columns; j++) {
      row.push(displayO ? "O" : "X");
      
      if (j === columns - 1 && columns % 2 === 0) { break; }
      
      displayO = !displayO;
    }
    
    board.push(row);
  }
  
  return board;
}

/*
[
    ["O","X","O","X"],
    ["X","O","X","O"],
    ["O","X","O","X"],
    ["X","O","X","O"],
    ["O","X","O","X"],
    ["X","O","X","O"]
]
*/
console.table(chessBoard(6,4));

/*
[
    ["O","X","O","X","O","X","O"],
    ["X","O","X","O","X","O","X"],
    ["O","X","O","X","O","X","O"]
]
*/
console.table(chessBoard(3,7));


/*======================= other solution =========================
function chessBoard(rows, columns) {
  return Array.from({length: rows}, (_,i) => Array.from({length: columns}, (_,j) => 'OX'[(i+j)%2]));
}
*/



