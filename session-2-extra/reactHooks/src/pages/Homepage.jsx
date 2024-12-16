import { Link } from 'react-router-dom'
import rutas from '../routes'

function Homepage() {
  return (
    <div>
      <p><Link to={rutas.state} >Ir a state</Link></p>
      <p><Link to={rutas.effect} >Ir a effect</Link></p>
      <h1>Homepage</h1>
    </div>
  )
}

export default Homepage