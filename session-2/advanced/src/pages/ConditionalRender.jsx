import rutas from "../routes"
import { useState } from "react"
import { Link } from 'react-router-dom'

function ConditionalRender() {
  const [booleano, setBooleano] = useState(false)

  return (
    <>
      <Link to={rutas.homepage} > Ir a Homepage </Link>
      <h1 onClick={() => setBooleano(!booleano)} >Este h1 siempre se va a cargar (prueba a darme click)</h1>


      {booleano && <button>Yo solo me voy a cargar si la condición es True</button>}


      {booleano ? <p  style={{color: "green"}}>La variable es verdadera</p> : <p style={{color: "red"}}>La variable es falsa</p>}


      {(() => {
        if(booleano){
          return (<p>La condición es verdadera, y se hizo con un if</p>)
        }
        else{
          return (<p>La condición es falsa, y se hizo con un if</p>)
        }
      })()}

      
    </>
  )
}

export default ConditionalRender