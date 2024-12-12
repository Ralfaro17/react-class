import { Link } from "react-router-dom"
import rutas from "../routes"

function Homepage() {
  return (
    <>
      <Link to={rutas.state}>Ver state</Link>
      <br />
      <Link to={rutas.effect}>Ver effect</Link>
      <br />
      <Link to={rutas.navigate}>Ver navigate</Link>
      <h1>Homepage</h1>
      <p>Este es el contenido de la página principal</p>
    </>
  )
}

export default Homepage