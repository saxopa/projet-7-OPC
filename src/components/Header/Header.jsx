import { NavLink } from "react-router-dom";
import logo from "../../styles/img/logo.png";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <NavLink to={"/"}>
        <img src={logo} alt="" />
      </NavLink>

      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>Accueil</NavLink>
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
