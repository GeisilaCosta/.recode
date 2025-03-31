import React from 'react'
import { useState } from 'react'
const Incrementa = () => {

    const [v1, setV1] = useState(0)

    const incrementar = () => {
        setV1(v1 + 1)
    }

    const decrementar = () => {
        setV1(v1 -1)
    }
    return (
        <>
        <h1>Incrementa</h1>
        <h2>Meus Clicks</h2>
            <h1>{v1}</h1>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
        </>
    )
}

export default Incrementa