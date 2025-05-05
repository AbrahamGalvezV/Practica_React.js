import { Square } from "./Square";
import { TURNS } from "./constants";

//-----------------------------------------------------------

export function TurnIndicator({ turn }) {

  return (
    // Turno actual
    <section className="turn">
      <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
      <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
    </section>
  );
}
