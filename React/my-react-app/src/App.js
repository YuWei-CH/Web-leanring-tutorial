
import { useState } from 'react';

function Square({value,onSquareClick}){
  // value store current value, and setValue store a functio to change value
  return(
    <button className="square" onClick={onSquareClick} >{value}</button>
  );
}

// helper function for winner calculating
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// "export" makes this function accessible outside of this file.
// "default" keyword tells other files using your code that it’s the main function in your file.
export default function Board() {
  // className like id in HTML, here is JSX
  // return a single JSX
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null)); // set 9 nulls

  function handleclick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice(); //male a copy by .slice()
    if (xIsNext){
      nextSquares[i] = "X";
    }else{
      nextSquares[i] = "O";
    }
    setSquares(nextSquares); //set copy to the squares
    setXIsNext(!xIsNext)
  }
  // show status on the page
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  return(
  <>

  <div className="status">{status}</div>
   <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleclick(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleclick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleclick(2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleclick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleclick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleclick(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleclick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleclick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleclick(8)}/>
      </div>
  </>
  );
}
