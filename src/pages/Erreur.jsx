import { NavLink } from "react-router-dom";
import "./Erreur.scss";

export default function Erreur() {
  return (
    <div className="div_erreur">
      <div className="label">
        <h1 className="text-wrapper">404</h1>
      </div>
      <h2 className="message-avertissement">Oups! La page que vous demandez n'existe pas.</h2>
      <NavLink to={"/"}>Retourner sur la page d'accueil</NavLink>
    </div>
  );
}
