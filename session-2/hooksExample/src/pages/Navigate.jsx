import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import rutas from '../routes';

function Navigate() {
  const [contador, setContador] = useState(0)

  const navigate = useNavigate()

  useEffect(() => {
    document.title = "Navigate"
  }, [])

  useEffect(() => {
    console.log(contador)
    if(contador === 10){
      navigate(rutas.homepage)
    }
  }, [contador, navigate])

  return (
    <>
      <Link to={rutas.homepage}>Ir a homepage</Link>
      <br />
      <h1>Si el contador llega a 10, serás redireccionado a la Homepage</h1>
      <button onClick={() => setContador(prev => prev + 1)}>Incrementar contador {contador}</button>
    </>
  )
}

export default Navigate