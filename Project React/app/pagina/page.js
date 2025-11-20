"use client";
import { useState } from "react";

export default function Triqui() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  function handleClick(i) {
    if (board[i] || winner) return;
    const newBoard = [...board];
    newBoard[i] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  }

  function resetGame() {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen 
                    bg-gradient-to-br from-indigo-900 via-purple-900 to-black
                    text-white">
      <h1 className="text-4xl font-extrabold mb-6 text-cyan-300 drop-shadow-lg">
        Juego del Triqui
      </h1>

      <div className="grid grid-cols-3 gap-3">
        {board.map((cell, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className={`w-24 h-24 text-4xl font-bold rounded-xl transition 
                       bg-purple-700 hover:bg-purple-600 shadow-lg`}
          >
            {cell}
          </button>
        ))}
      </div>

      <p className="mt-4 text-xl text-cyan-300 font-semibold">
        {winner
          ? `Ganador: ${winner}`
          : board.every(Boolean)
          ? "Empate"
          : `Turno: ${xIsNext ? "X" : "O"}`}
      </p>

      <button
        onClick={resetGame}
        className="mt-5 px-5 py-2 bg-green-500 hover:bg-green-600 
                   text-black font-bold rounded-lg text-lg shadow-md"
      >
        Reiniciar
      </button>
    </div>
  );
}

function calculateWinner(board) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}
