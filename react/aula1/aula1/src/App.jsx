import { useState } from 'react'
import './App.css'
import Trabalhos from './components/Trabalhos'
import Formacoes from './components/Formacoes'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Curriculo / Trabalhos</h1>

      <Trabalhos />
      <Formacoes />
    </>
  )
}

export default App
