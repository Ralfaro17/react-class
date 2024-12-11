import './App.css'
import Variables from './components/Variables' // esto es una importación de un default export
import { Props } from './components/Props' // esto es una importación de un named export

function App() {

  return (
    <>
      <Props nombre="Roger" />
      <Variables nombre="Roger" apellido="Alfaro" />
    </>
  )
}

export default App
