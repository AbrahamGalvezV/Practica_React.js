import { useState, useEffect } from "react";
import "./App.css";

//---------------------------------------------------------------

const NAVIGATE_EVENT = "pushstate";

function navigate(href) {
  window.history.pushState({}, "", href);
  const navigationEvent = new Event("NAVIGATE_EVENT");
  window.dispatchEvent(navigationEvent);
}

function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es una página de ejemplo para crear un React Router desde cero</p>
      <a href="/about">Ir a Sobre nosotros</a>
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
      <a href="/">Ir a Home</a>
    </>
  );
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
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
