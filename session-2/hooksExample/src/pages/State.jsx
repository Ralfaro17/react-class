import { useState } from 'react';
import { Link } from 'react-router-dom';
import rutas from '../routes';

function State() {
  // useState devuelve -> [variable, setterVariable]
  // si pasamos useState(0) -> [0, setVariable]
  const [numero, setNumero] = useState(0);

  return (
    <>
      <Link to={rutas.homepage}>Ir a Homepage</Link>
      <h1>El contador es: {numero}</h1>
      <button
        onClick={() => {
          setNumero((prev) => prev + 1);
        }}
      >
        Incrementar contador
      </button>
    </>
  );
}

export default State;
