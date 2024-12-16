import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import rutas from './routes'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={rutas.homepage} element={<Homepage nombre="Roger" />} /> {/* Con element, se renderiza el componente pasando una instancia del mismo */}
          <Route path={rutas.login} Component={Login} /> {/* Con Component, se renderiza el componente directo como función */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
