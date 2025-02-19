import { useState } from "react";
import "./App.css";

//--------------------------------------------------------------------------

// Creamos el tipo de fichas
const TURNS = {
  X: "X",
  O: "O",
};

// Componente reutilizable para cada casilla del tablero
const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`;

  // Manejador de clic para actualizar el tablero
  const handleClick = () => {
    updateBoard(index);
  }

  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  );
};


function App() {
  // Estado para el tablero (9 casillas vacías)
  const [board, setBoard] = useState(Array(9).fill(null));
  // Estado para alternar turnos
  const [turn, setTurn] = useState(TURNS.X);
  
  // Funcion para actualizar tablero y cambiar el turnos
  const updateBoard = (index) => {    
    // Crea una copia del tablero y actualiza la casilla seleccionada
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
  }
  console.log(board);
  console.log(turn);
  
  return (
    <main className="board">
      <h1>Tic tac toe</h1>

      {/* Traemos el tablero de juego y le damos forma con casillas de 3x3 */}
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square
              key={index} // Usamos el index como identificador de cada casilla (normalmente se usa id)
              index={index} // Pasamos el indez como prop
              updateBoard={updateBoard} // Le pasamos la función para alternar el turno
            >{board[index]}</Square>
          );
        })}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
    </main>
  );
}

export default App;
