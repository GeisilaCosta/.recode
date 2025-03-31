import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Header - ocupa toda a largura */}
      <header className="header">
        <h1>Header</h1>
      </header>

      {/* Corpo principal com três colunas */}
      <div className="main-content">
        {/* Nav - coluna esquerda */}
        <nav className="nav">
          <h2>Navigation</h2>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </nav>

        {/* Main - coluna central */}
        <main className="main">
          <h2>Main Content</h2>
          <p>Este é o conteúdo principal da página.</p>
          
          {/* Footer dentro do main */}
          <footer className="main-footer">
            <p>Footer dentro do Main</p>
          </footer>
          
          {/* Aside dentro do main */}
          <aside className="main-aside">
            <p>Aside dentro do Main</p>
          </aside>
        </main>

        {/* Aside - coluna direita */}
        <aside className="aside">
          <h2>Sidebar</h2>
          <p>Conteúdo adicional aqui.</p>
        </aside>
      </div>

      {/* Footer principal - ocupa toda a largura */}
      <footer className="footer">
        <p>Footer principal da página</p>
      </footer>
    </div>
  );
}

export default App;
