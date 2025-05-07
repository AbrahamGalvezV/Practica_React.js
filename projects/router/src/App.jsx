import { useState, useEffect } from "react";
import { EVENTS } from "./consts";
import HomePage from "./pages/Home";
import AboutPage from './pages/About';   
// import Link from "./Link"
import "./App.css";

//---------------------------------------------------------------

function App () {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
    }
  }, []);

  return (
    <main>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  );
}

export default App;
