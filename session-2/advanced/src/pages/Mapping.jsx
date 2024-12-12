import rutas from "../routes"
import { useState } from "react"
import { Link } from 'react-router-dom'

function Mapping() {
  const [arreglo, setArreglo] = useState([])

  return (
    <>
      <Link to={rutas.homepage} > Ir a Homepage </Link>
      <h1> Renderizado de multiples elementos mediante mapping </h1>

      <input type="text" onKeyDown={(event) => {
        if (event.key === "Enter"){
          setArreglo([...arreglo, event.target.value])
          event.target.value = ""
        }
      }} />

      {arreglo.map((element, index) => {
        return (
          <p key={crypto.randomUUID}>El elemento <u>{element}</u> está en el indice <u>{index}</u></p>
        )
      })}

    </>
  )
}

export default Mapping