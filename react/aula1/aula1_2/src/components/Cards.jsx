import React from "react";
import Button from "./Button";
import './Cards.css'

function Cards() {
    const formatacao02 = {
        color: 'red',
    }
    return (
        <div className="formatacao01">
            <h2 style={formatacao02}>Meu Cartao</h2>
            <Button value="soma" />
            <Button value="subtracao" />
            <button type="submit">Enviar</button>
            <button type="button">Limpar</button>
        </div>
    );
}

export default Cards;