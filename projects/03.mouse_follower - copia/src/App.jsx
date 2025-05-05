import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log('effect', { enabled }) 

    const handleMove = (event) => {
      const { clientX, clientY } = event;
      console.log('handleMove', { clientX, clientY });
      setPosition({ x: clientX, y: clientY });
    };

    if (enabled) { // Si se cumple enabled
      // Cuando se mueva el puntero también se ejecutará la función handleMove
      window.addEventListener('pointermove', handleMove);
    };

    // Cleanup que actua cuando:
    // Cuando el componente se desmonta
    // Cuando cambian las dependencias, antes de ejecutar el efecto
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }

  }, [enabled]);

  return (
    <main>
      <div className='bolita' style={{
          position: 'absolute',
          backgroundColor: 'rgb(0, 0, 1)',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <div className='bolita'/> 
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'}  seguir puntero
      </button>
    </main>
  )
}

export default App 
