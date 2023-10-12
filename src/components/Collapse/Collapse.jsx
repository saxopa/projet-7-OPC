import React, { useState } from "react";
import "./Collapse.scss";

export default function Collapse({ title, children }) {
  //définis un état pour le collapse faux par défaut
  const [isCollapse, setIsCollapse] = useState(false);

  //appel une fonction qui change l'état du collapse
  const toggleCollapse = () => setIsCollapse(!isCollapse);
  return (
    <div className="collapse">
      <button onClick={toggleCollapse} className="collapse_title">
        {title}
      </button>

      {isCollapse && <div className="collapse_content">{children}</div>}
    </div>
  );
}
