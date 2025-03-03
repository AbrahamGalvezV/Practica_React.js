import { Square } from "./Square";

//------------------------------------------------------------------

export function Board({ board, updateBoard }) {
  return (
    //Tablero de juego
    <section className="game">
      {board.map((square, index) => (
        <Square key={index} index={index} updateBoard={updateBoard}>
          {square}
        </Square>
      ))}
    </section>
  );
}
