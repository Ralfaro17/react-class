import { Link } from 'react-router-dom'
import rutas from '../routes'

function Homepage() {
  return (
    <div>
      <p><Link to={rutas.conditionalRender}>Ir a Conditional Render</Link></p>
      <p><Link to={rutas.mapping}>Ir a Mapping</Link></p>
      <h1>Homepage</h1>
    </div>
  )
}

export default Homepage