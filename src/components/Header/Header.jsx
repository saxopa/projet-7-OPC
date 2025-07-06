import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      <NavLink to={"."}>
        <img src={logo} alt="" />
      </NavLink>

      <nav>
        <ul className="liste-menu">
          <li className="texte-menu">
            <NavLink to={"."}>Accueil</NavLink>
          </li>
          <li className="texte-menu">
            {" "}
            <NavLink to={"about"}>À Propos</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
