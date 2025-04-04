import { NavLink } from "react-router-dom";
import "./Menu.css";

export default function Menu() {
  return (
    <div className="menu">
      <NavLink to="/">Home </NavLink>
      <NavLink to="/servicos">Serviços </NavLink>
      <NavLink to="/sobre">Sobre </NavLink>
      <NavLink to="/contato">Contato</NavLink>
    </div>
  );
}

