import { Link } from "../Link"

//----------------------------------------------------------------------

export default function AboutPage() {
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
      <Link to='/'>Ir a Home</Link>
    </>
  );
}