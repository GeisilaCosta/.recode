import { useState } from "react";
import "../App.css";

function Main() {
  const [text, setText] = useState("Bem-vindo!");
  return (
    <main className="main">
      <p>{text}</p>
      <button onClick={() => setText("Obrigado por visitar!")}>Clique aqui</button>
    </main>
  );
}

export default Main;

// Main: Contém um botão que muda o texto exibido ao clicar (useState).