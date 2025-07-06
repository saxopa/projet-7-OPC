import React, { useState } from "react";
import chevronDown from "../../assets/img/arrow_down.png";
import chevronUp from "../../assets/img/arrow_up.svg";
import "./Collapse.scss";

export default function Collapse({ title, children }) {
  //définis un état pour le collapse faux par défaut
  const [isCollapse, setIsCollapse] = useState(false);

  //appel une fonction qui change l'état du collapse
  const toggleCollapse = () => setIsCollapse(!isCollapse);
  return (
    <div className="collapse">
      <div className="collapse-container-title-collapse">
        <h2 className="collapse_title">{title}</h2>
        <p onClick={toggleCollapse}>
          
          {isCollapse ? (
            <img src={chevronDown} alt="chevron up" />
          ) : (
            <img src={chevronUp} alt="chevron down" />
          )}
        </p>
      </div>

      {isCollapse && <div className="collapse_content"><div>{children}</div></div>}
    </div>
  );
}
