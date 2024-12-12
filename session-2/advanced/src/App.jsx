import { BrowserRouter, Routes, Route } from 'react-router-dom'
import rutas from './routes'
import Homepage from './pages/Homepage'
import Mapping from './pages/Mapping'
import ConditionalRender from './pages/ConditionalRender'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={rutas.homepage} element={<Homepage />} />
          <Route path={rutas.conditionalRender} element={<ConditionalRender />} />
          <Route path={rutas.mapping} element={<Mapping />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
