import { Link } from "react-router-dom"
import Props from "../components/Props"
import propTypes from 'prop-types'

function PropsPage({ nombre, apellido }){
  return(
    <div>
      <Link to="/">Ir a homepage</Link>
      <Props nombre={nombre} apellido={apellido} />
    </div>
  )
}

PropsPage.propTypes = {
  nombre: propTypes.string.isRequired,
  apellido: propTypes.string.isRequired
}

export default PropsPage