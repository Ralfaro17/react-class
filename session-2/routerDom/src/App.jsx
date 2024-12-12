import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import PropsPage from './pages/PropsPage'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Homepage} /> {/* Componente sin props (se usa el atributo Component) */}
          <Route path='/props' element={<PropsPage nombre='Juan' apellido='Perez' />} /> {/* Componente con props (se usa el atributo element) */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
