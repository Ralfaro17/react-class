import { Link } from "react-router-dom"
import rutas from "../routes"
import propTypes from 'prop-types'

function Homepage({ nombre }) {
  return (
    <>
      <h1>Homepage</h1>
      <Link to={rutas.login}  >Ir a Login</Link>
      <h3>Hola {nombre} </h3>
    </>
  )
}

Homepage.propTypes = {
  nombre: propTypes.string.isRequired
}

export default Homepage