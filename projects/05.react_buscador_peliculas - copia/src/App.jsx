import "./App.css"

function App() {

  
  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form className="">
          <input placeholder="Avengers, Star Wars, Terminator..." />
          <button type="submit">Buscar</button>
        </form>
      </header>

      <main>
        Aquí irán los resultados
      </main>

    </div>
  )
}

export default App
