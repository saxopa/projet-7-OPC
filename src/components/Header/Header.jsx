import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      <NavLink to={"/projet-7-OPC/"}>
        <img src={logo} alt="" />
      </NavLink>

      <nav>
        <ul className="liste-menu">
          <li>
            <NavLink to={"/projet-7-OPC/"}>Accueil</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to={"/about"}>À Propos</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
