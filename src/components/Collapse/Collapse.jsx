import React, { useState } from "react";
import "./Collapse.scss";

export default function Collapse({ title, children }) {
  //définis un état pour le collapse faux par défaut
  const [isCollapse, setIsCollapse] = useState(false);

  //appel une fonction qui change l'état du collapse
  const toggleCollapse = () => setIsCollapse(!isCollapse);
  return (
    <div className="collapse">
      <div>
        <h2 className="collapse_title">{title}</h2>
        <p onClick={toggleCollapse}>
          {isCollapse ? (
            <i className="fa-solid fa-chevron-up"></i>
          ) : (
            <i className="fa-solid fa-chevron-down"></i>
          )}
        </p>
      </div>

      {isCollapse && <div className="collapse_content">{children}</div>}
    </div>
  );
}
