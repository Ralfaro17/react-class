import rutas from "../routes"
import { Link } from 'react-router-dom'

function Homepage() {
  return (
    <>
      <Link to={rutas.conditionalRender} >Ir a conditional render</Link>
      <br />
      <Link to={rutas.mapping} >Ir a mapping</Link>
      <h1>Esta es la homepage de Advances</h1>
      <p>Esto contiene temas y ejemplos de conceptos algo mas avanzados pero esenciales de React</p>
    </>
  )
}

export default Homepage