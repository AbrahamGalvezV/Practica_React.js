import "./App.css";
import { useState } from "react";
import { TURNS } from "./Components/constants";
import { checkWinnerFrom, checkEndGame } from "./Logic/board";
import { WinnerModal } from "./Components/WinnerModal";
import { Board } from "./Components/Board";
import { TurnIndicator } from "./Components/TurnIndicator";
import { saveGameToStorage, resetGameStorage } from "./Logic/Storage";
import confetti from "canvas-confetti";

//--------------------------------------------------------------------------

function App() {
  // Estado para el tablero (9 casillas vacías)
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem("board");
    if (boardFromStorage) return JSON.parse(boardFromStorage);
    return Array(9).fill(null);
  });

  // Estado para alternar turnos
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn");
    return turnFromStorage ?? TURNS.X;
  });

  // null = no hay ganador / false = empate
  const [winner, setWinner] = useState(null);

  // Reseteamos todos los parámetros
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    resetGameStorage();
  };

  // Función para actualizar tablero y cambiar turnos
  const updateBoard = (index) => {
    // No modificar si la casilla ya tiene valor o si hay un ganador
    if (board[index] || winner) return;

    // Actualizar el tablero
    const newBoard = [...board]; // Copia del estado para evitar mutaciones
    newBoard[index] = turn;
    setBoard(newBoard);

    // Cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    // Guardar la patida
    saveGameToStorage({
      board: newBoard,
      turn: newTurn,
    });

    // Revisar si hay un ganador
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>

      <Board board={board} updateBoard={updateBoard} />

      <TurnIndicator turn={turn} />
      <button onClick={resetGame}>Reset del juego</button>

      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  );
}

export default App;
