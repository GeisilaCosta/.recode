import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Layout = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }} className="d-flex flex-column">

      {/* Cabeçalho */}
      <header className="bg-primary text-white text-center p-3">Cabeçalho</header>

      {/* Corpo principal */}
      <div className="row flex-grow-1">
        {/* Menu de Navegação */}
        <nav className="col-md-2 bg-secondary text-white" style={{ height: '100%' }}>Navegação</nav>

        {/* Conteúdo Principal */}
        <main className="col-md-8 bg-danger position-relative" style={{ height: '100%', textAlign: 'center' }}>
          Principal
          <aside className="bg-success text-white p-3 position-absolute h-50" 
                 style={{ width: '25%', right: 0, marginRight: '1rem', top: '6rem' }}>
            Aparte Interno
          </aside>
          <footer className="bg-warning text-dark text-center p-3 position-absolute w-100" 
                  style={{ bottom: '1px', width: '100%', left: 0 }}>
            Rodapé Interno
          </footer>

        </main>

        {/* Aparte (Aside) */}
        <aside className="col-md-2 bg-success text-white" style={{ height: '100%' }}>Aparte</aside>
      </div >

      {/* Rodapé */}
      <footer className="bg-warning text-dark text-center p-3">Rodapé</footer>
    </div>
  );
};

export default Layout;
