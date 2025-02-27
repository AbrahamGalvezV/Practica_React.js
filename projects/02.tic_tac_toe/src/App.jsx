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

// Combinaciones ganadoras
const winnwe_combos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]


function App() {
  // Estado para el tablero (9 casillas vacías)
  const [board, setBoard] = useState(Array(9).fill(null));
  // Estado para alternar turnos
  const [turn, setTurn] = useState(TURNS.X);
  // null = no hay ganador / false = empate
  const [winner, setWinner] = useState(null); 
  
  // Comprobamos si alguien ha ganado
  const checkWinner = (boardToCheck) => {
    // Revisamos las combinaciones 
    for (const combo of winnwe_combos) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] && // 0 -> X u O
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      )
      return boardToCheck[a] // El palo ganador es boardToCheck[a] X u O
    }
    return null
  }

  // Reseteamos todos los parámetros
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  // Funcion para actualizar tablero y cambiar turnos
  const updateBoard = (index) => {    

    // No se modificara la casilla si ya tiene un valor otrogado o ya ha ganado alguien
    if (board[index] || winner) return

    // Actualizar el tablero
    // Crea una copia del array. [null, null, x, null, o...] van guardando los movimientos
    const newBoard = [...board] 
    newBoard[index] = turn // Modifíca solo la casilla especifica
    setBoard(newBoard) // React detecta el cambio y re-renderiza unicamente la casilla modificada

    // Cambiar el turno
    // Si el turno esta en x el nexTurn será. si el turno es o newTurn será x    
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn) // Actualizamos el estado setTurn

    // Revisamos si hay ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    } // todo: check if game is over
  }
  
  return (
    <main className="board">
      <h1>Tic tac toe</h1>

      {/* Traemos el tablero de juego y le damos forma con casillas de 3x3 */}
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square
              key={index} // Usamos el index como identificador de cada casilla (normalmente se usa id)
              index={index} // Pasamos el index como prop
              updateBoard={updateBoard} // Le pasamos la función como prop para alternar el turno
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

      {
        winner != null && (
          <section className="winner">
            <div className="text">
              <h2>
                {
                  winner === false
                    ? 'Empate'
                    : 'Ganó:'
                }
              </h2>
              <header className="win">
                {winner && <Square>{winner}</Square>}
              </header>

              <footer>
                <button onClick={resetGame}>Empezar de nuevo</button>
              </footer>
            </div>
          </section>
        )
      } 
      
    </main>
  );
}

export default App;
