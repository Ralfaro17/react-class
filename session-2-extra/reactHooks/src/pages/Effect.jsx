import { useEffect, useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import rutas from "../routes"

function Effect() {
  const [numero, setNumero] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    console.log("waos")
    if(numero > 20){
      navigate(rutas.homepage)
    }
  }, [numero, navigate])

  useEffect(() => {
    document.title = "Effect"
  }, [])

  return (
    <div>
      <Link to={rutas.homepage} >Ir a Homepage</Link>
      <h1>Effect</h1>
      <button onClick={() => setNumero((prev) => prev + 1)} >Contador {numero}</button>
    </div>
  )
}

export default Effect