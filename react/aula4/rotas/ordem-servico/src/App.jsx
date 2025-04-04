import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Servico from "./components/Servico";
import Sobre from './components/Sobre'
import Contato from './components/Contato'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Menu />
      {/* <h1>App principal</h1> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/servicos" element={<Servico />}></Route>
        <Route path="/sobre" element={<Sobre />}></Route>
        <Route path="/contato" element={<Contato />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
