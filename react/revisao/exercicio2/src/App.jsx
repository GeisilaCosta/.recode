import Header from "./components/Header";
import Aside from "./components/Aside";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Header title="Meu Site Pessoal" />
      <div className="container">
        <Aside />
        <Main />
      </div>
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;

