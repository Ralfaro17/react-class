import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import rutas from '../routes';

function Effect() {
  const [variable, setVariable] = useState(0)

  useEffect(() => {
    console.log("La variable ha cambiado")
  }, [variable])

  useEffect(() => {
    document.title = "effect"
  }, [])

  return (
    <>
      <Link to={rutas.homepage}>Ir a Homepage</Link>+
      <br />
      <button onClick={() => setVariable(prev => prev + 1)}>Incrementar variable</button>
    </>
  )
}

export default Effect