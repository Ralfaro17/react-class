import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Homepage from './pages/Homepage'
import FormBasico from './pages/FormBasico'
import FormArray from './pages/FormArray'
import rutas from './routes'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={rutas.homepage} element={<Homepage />} />
          <Route path={rutas.formBasico} element={<FormBasico />} />
          <Route path={rutas.formArray} element={<FormArray />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
