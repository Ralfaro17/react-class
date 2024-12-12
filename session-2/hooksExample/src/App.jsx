import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import State from './pages/State'
import rutas from './routes'
import Effect from './pages/Effect'
import Navigate from './pages/Navigate'
import './App.css'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={rutas.homepage} element={<Homepage/>} />
          <Route path={rutas.state} element={<State/>} />
          <Route path={rutas.effect} element={<Effect/>} />
          <Route path={rutas.navigate} element={<Navigate/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
