import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import { Router } from "./Router";
import Page404 from "./pages/404";
import "./App.css"; 

//---------------------------------------------------------------

const appRoutes = [
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
]

function App() {
  return (
    <main>
      <Router
        routes={appRoutes} defaultComponent={Page404}
      />
    </main>
  );
}

export default App;
