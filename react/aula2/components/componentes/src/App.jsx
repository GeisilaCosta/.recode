import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Corpo from "./components/Corpo";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="container-fluid">
      {/* Cabeçalho */}
      <Header />

      {/* Layout principal em grid */}
      <div className="row">
        {/* Barra lateral esquerda (Nav) */}
        <div className="col-md-2">
          <Nav />
        </div>

        {/* Conteúdo principal */}
        <div className="col-md-8">
          <Corpo />
        </div>

        {/* Barra lateral direita (Aside) */}
        <div className="col-md-2">
          <Aside />
        </div>
      </div>

      {/* Rodapé */}
      <Footer />
    </div>
  );
}
