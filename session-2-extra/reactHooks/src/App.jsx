import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import State from './pages/State'
import Effect from './pages/Effect'
import rutas from './routes'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={rutas.homepage} element={<Homepage />} />
          <Route path={rutas.state} element={<State />} />
          <Route path={rutas.effect} element={<Effect />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
