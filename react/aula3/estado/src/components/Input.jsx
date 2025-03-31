
import React, { useState } from 'react'

const Input = () => {
const [texto, setTexto] = useState('')

  return (
    <>
    <input type="text" value={texto} onChange={(e) => setTexto(e.target.value)}/>
    <h1>{texto}</h1>
    </>
  )
}

export default Input