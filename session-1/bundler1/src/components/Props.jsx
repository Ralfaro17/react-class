import propTypes from 'prop-types';

// Esto es un named export
export function Props(props) {
  return (
    <div>
      <h1>Hola {props.nombre}</h1>
      <h2>
        Si ves mi apellido={props.apellido}, es porque la prop ha sido pasada,
        caso contrario, no
      </h2>
    </div>
  );
}

Props.propTypes = {
  nombre: propTypes.string.isRequired,
  apellido: propTypes.string,
};
