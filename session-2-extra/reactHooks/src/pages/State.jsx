import { useState } from 'react';
import { Link } from 'react-router-dom'
import rutas from '../routes';

function State() {
  // useState(algúnValor) -> [algúnValor, setterParaElValor]
  const [contador, setContador] = useState(0);

  return (
    <div>
      <Link to={rutas.homepage} >Ir a Homepage</Link>
      <h1>El contador está en {contador}</h1>
      <button
        onClick={() => {
          // No importa el nombre que se le ponga a la variable/parámetro que se le pase a la función del setter
          setContador((prev) => prev + 1);
          setContador((waos) => waos + 1);
        }}
      >
        Incrementar
      </button>
    </div>
  );
}

export default State;
