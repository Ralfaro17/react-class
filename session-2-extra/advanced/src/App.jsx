import { BrowserRouter, Routes, Route } from 'react-router-dom'
import rutas from './routes'
import ConditionalRender from './pages/ConditionalRender'
import Mapping from './pages/Mapping'
import Homepage from './pages/Homepage'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={rutas.homepage} element={<Homepage/>} />
          <Route path={rutas.conditionalRender} element={<ConditionalRender/>} />
          <Route path={rutas.mapping} element={<Mapping/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
