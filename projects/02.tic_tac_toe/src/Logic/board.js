import { winner_combos } from "../Components/constants.js";

//------------------------------------------------

// Comprobamos si alguien ha ganado
export const checkWinnerFrom = (boardToCheck) => {
  // Revisamos las combinaciones ganadoras
  for (const combo of winner_combos) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] && // Si la casilla no está vacía
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a]; // Devuelve el ganador (X u O)
    }
  }
  return null; // No hay ganador
};

export const checkEndGame = (newBoard) => {
  // Revisamos si hay un empate
  return newBoard.every((square) => square !== null);
};
