import React, { useState } from "react";
import "./Collapse.scss";

export default function Collapse({ title, children }) {
  //définis un état pour le collapse faux par défaut
  const [isCollapse, setIsCollapse] = useState(false);

  //appel une fonction qui change l'état du collapse
  const toggleCollapse = () => setIsCollapse(!isCollapse);
  return (
    <div className="collapse">
      <div className="collapse-container-title">
        <h2 className="collapse_title">{title}</h2>
        <p onClick={toggleCollapse}>
          {isCollapse ? (
            <i className="fa-solid fa-chevron-up">a</i>
          ) : (
            <i className="fa-solid fa-chevron-down">2</i>
          )}
        </p>
      </div>

      {isCollapse && <div className="collapse_content">{children}</div>}
    </div>
  );
}
