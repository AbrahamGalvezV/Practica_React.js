
// Componente reutilizable para cada casilla del tablero
export const Square = ({ children, isSelected, updateBoard, index }) => {
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