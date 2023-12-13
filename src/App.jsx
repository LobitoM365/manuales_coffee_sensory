import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Nav } from './pages/Nav'
import { ManualUsuario } from './pages/manualUsuario'
import { ManualTecnico } from './pages/manualTecnico'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element = {<Nav/>}>
          <Route path='usuario/manual' element={<ManualUsuario/>}/>
          <Route path='/manual/tecnico' element={<ManualTecnico/>}/>
          </Route>/
        
      </Routes>
    </>
  )
}

export default App
