import propTypes from 'prop-types'

function Props({ nombre, apellido }) {
  return (
    <div>
      <h1>Hola {nombre} {apellido}</h1>
    </div>
  )
}

Props.propTypes = {
  nombre: propTypes.string.isRequired,
  apellido: propTypes.string.isRequired
}

export default Props