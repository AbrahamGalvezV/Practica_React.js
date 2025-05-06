import { useState, useEffect } from "react";
import "./App.css";

//---------------------------------------------------------------

const NAVIGATION_EVENT = "pushstate";

function navigate(href) {
  window.history.pushState({}, "", href); // Cambia la URL sin refrescar la página
  const navigationEvent = new Event("NAVIGATION_EVENT");
  window.dispatchEvent(navigationEvent); // Notifica a React que la URL ha cambiado
}

function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es una página de ejemplo para crear un React Router desde cero</p>
      <button onClick={() => navigate('/about')}>Ir a Sobre nosotros</button>
    </>
  );
}

function AbautPage() {
  return (
    <>
      <h1>Abaut</h1>
      <div>
        <img
          src="https://avatars.githubusercontent.com/u/154621378?v=4"
          alt="Foto del creador"
        />
      </div>
      <p>Estamos creando un clon de React Router</p>
      <button onClick={() => navigate('/')}>Ir a Home</button>
    </>
  );
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(NAVIGATION_EVENT, onLocationChange)

    return () => {
      window.removeEventListener(NAVIGATION_EVENT,onLocationChange)
    }
  }, []);

  return (
    <main>
      {currentPath === "/" && <HomePage />}
      {currentPath === "/about" && <AbautPage />}
    </main>
  );
}

export default App;
