import { useState } from "react";
export default function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    alert(`Nome:${nome}\nEmail:${email}\nMensagem:${mensagem}`);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Nome"
        required
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        type="email"
        required
      />
      <textarea
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
        placeholder="Mensagem"
        required
      />
      <button type="submit">Enviar</button>
    </form>
  );
}