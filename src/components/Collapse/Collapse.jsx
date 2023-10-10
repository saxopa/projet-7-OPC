import React, { useState } from "react";
import './Collapse.scss'





export default function Collapse({title, children}) {
    //définis un état pour le collapse faux par défaut
const [isCollapse, setIsCollapse] = useState(false)

//appel une fonction qui change l'état du collapse
const toggleCollapse = () => setIsCollapse(!isCollapse)
    return (
        < >
            <button onClick={toggleCollapse} className='collapse_title'>{title}</button>

            <div className='collapse_content'>
                {isCollapse && <div>{children}</div>}
            </div>
        </>
    )
    
    
}