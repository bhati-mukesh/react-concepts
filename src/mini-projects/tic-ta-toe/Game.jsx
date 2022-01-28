import { useEffect, useState } from "react";
import "./Game.css";

const checkWinner = (records) => {
  // Horizontal
  if (records[0] && records[0] === records[1] && records[0] === records[2])
    return true;
  if (records[3] && records[3] === records[4] && records[3] === records[5])
    return true;
  if (records[6] && records[6] === records[7] && records[6] === records[8])
    return true;
  // vertical
  if (records[0] && records[0] === records[3] && records[0] === records[6])
    return true;
  if (records[1] && records[1] === records[4] && records[1] === records[7])
    return true;
  if (records[2] && records[2] === records[5] && records[2] === records[8])
    return true;
  // diagonally
  if (records[0] && records[0] === records[4] && records[0] === records[8])
    return true;
  if (records[2] && records[2] === records[4] && records[2] === records[6])
    return true;
};

const isGameCompleted = (records) => {
  return records.every((x) => x !== "");
};

export default function Game() {
  const [records, setRecords] = useState(new Array(9).fill(""));
  const [xIsNext, setXisNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const handleClick = (idx) => {
    if (winner) return;
    if (records[idx] !== "") return;
    setRecords(
      records.map((r, id) => (id === idx ? (xIsNext ? "X" : "O") : r))
    );
    setXisNext((xIsNext) => !xIsNext);
  };

  useEffect(() => {
    const isCompleted = checkWinner(records);
    if (isCompleted) {
      setWinner(xIsNext ? "O" : "X");
    }
    const isGameOver = isGameCompleted(records);
    if (isGameOver) {
      setGameOver(true);
    }
  }, [records]);

  return (
    <div className="App">
      <div className="winner-banner">
        {winner && <p>Winner is - {winner}</p>}
        {!winner && gameOver && <p>Game Over!</p>}
      </div>
      <div className="board-row">
        <div className="board-item" onClick={() => handleClick(0)}>
          {records[0]}
        </div>
        <div className="board-item" onClick={() => handleClick(1)}>
          {records[1]}
        </div>
        <div className="board-item" onClick={() => handleClick(2)}>
          {records[2]}
        </div>
      </div>
      <div className="board-row">
        <div className="board-item" onClick={() => handleClick(3)}>
          {records[3]}
        </div>
        <div className="board-item" onClick={() => handleClick(4)}>
          {records[4]}
        </div>
        <div className="board-item" onClick={() => handleClick(5)}>
          {records[5]}
        </div>
      </div>
      <div className="board-row">
        <div className="board-item" onClick={() => handleClick(6)}>
          {records[6]}
        </div>
        <div className="board-item" onClick={() => handleClick(7)}>
          {records[7]}
        </div>
        <div className="board-item" onClick={() => handleClick(8)}>
          {records[8]}
        </div>
      </div>
      <button
        className="reset-button"
        onClick={() => {
          setRecords([...new Array(9).fill("")]);
          setXisNext(true);
          setWinner(null);
          setGameOver(false);
        }}
      >
        Restart Game
      </button>
    </div>
  );
}
